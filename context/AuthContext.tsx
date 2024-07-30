'use client';

import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { IUserInfo, IReqContext, IReqLoginAccount } from '@/model/accountModel';
import { loginUser } from '@/repositories/accountRepository';

import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';

export const AuthContext = createContext<IReqContext | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedAuth = localStorage.getItem('isAuth');
      const validToken = Cookies.get('token');
      return !!(savedAuth === 'true' && validToken !== undefined);
    }
  });
  const [user, setUser] = useState({
    name: '',
    username: '',
    restaurant: '',
    token: '',
  });

  const [location, setLocation] = useState('jakarta');

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
    const getLocation = localStorage.getItem('location');
    if (takeToken === undefined || getIsAuth !== 'true') {
      resetAuth();
    } else {
      const decodedToken = jwtDecode(takeToken) as IUserInfo;
      setIsAuth(true);
      setUser((prev) => ({
        ...prev,
        name: decodedToken.name,
        username: decodedToken.username,
        restaurant: decodedToken.restaurant,
        token: takeToken,
      }));
    }

    if (!getLocation) {
      localStorage.setItem('location', location);
    }
  };

  const resetAuth = () => {
    localStorage.setItem('isAuth', 'false');
    Cookies.remove('token');
    setIsAuth(false);
  };

  const logout = () => {
    resetAuth();
  };

  return (
    <AuthContext.Provider
      value={{ login, isLoggedIn, logout, isAuth, user, location }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IReqContext => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('Context is NULL');
  }
  return context;
};
