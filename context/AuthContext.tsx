'use client';

import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import {
  IDataResponse,
  IReqContext,
  IReqLoginAccount,
} from '@/model/accountModel';
import { loginUser } from '@/repositories/accountRepository';

import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';

export const AuthContext = createContext<IReqContext | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<IDataResponse>({
    name: '',
    username: '',
    restaurant: '',
    token: '',
  });

  const login = async (request: IReqLoginAccount) => {
    const response = await loginUser(request);
    if (response.errors) {
      return toast({
        variant: 'destructive',
        title: response.errors,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 3000,
      });
    } else {
      console.log(response);

      setUser((prev) => ({
        ...prev,
        name: response.data.name,
        username: response.data.username,
        token: response.data.token,
      }));

      setIsAuth(true);

      localStorage.setItem('isAuth', 'true');
      Cookies.set('token', response.data.token, { expires: 1 });
    }
  };

  const isLoggedIn = () => {
    const takeToken = Cookies.get('token');
    const getIsAuth = localStorage.getItem('isAuth');

    if (takeToken === undefined || getIsAuth !== 'true') {
      resetAuth();
    } else {
      const decodedToken = jwtDecode(takeToken) as IDataResponse;
      console.log(decodedToken);
      setUser((prev) => ({
        ...prev,
        name: decodedToken.name,
        username: decodedToken.username,
        restaurant: decodedToken.restaurant,
      }));
    }
  };

  const resetAuth = () => {
    localStorage.setItem('isAuth', 'false');
    Cookies.remove('token');
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, isAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};
