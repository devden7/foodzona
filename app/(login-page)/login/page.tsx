'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  HiOutlineX,
  HiArrowSmLeft,
  HiQuestionMarkCircle,
} from 'react-icons/hi';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formLoginSchema, formRegisterSchema } from '@/lib/validation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { registerUser } from '@/repositories/accountRepository';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const [isBtnLogin, setIsBtnLogin] = useState(false);
  const [isBtnRegister, setIsBtnRegister] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuth, login, isLoggedIn } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const formRegister = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      username: '',
      name: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formLoginSchema>) {
    login(values);
    router.push('/');
  }

  async function onSubmitRegister(values: z.infer<typeof formRegisterSchema>) {
    const response = await registerUser(values);
    if (response.errors) {
      return toast({
        variant: 'destructive',
        title: response.errors,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 3000,
      });
    }

    setIsBtnRegister(false);
    setIsBtnLogin(true);
  }

  useEffect(() => {
    isLoggedIn();
    if (isAuth) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [isAuth]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!isAuth ? (
        <section>
          <div className="absolute right-0 top-12 -z-50 hidden h-screen w-full overflow-hidden md:block">
            <Image
              src="/assets/login-background-illustration.jpg"
              width={752}
              height={0}
              alt="login illustration"
              className="size-full"
            />
          </div>
          <div className="container">
            <div className="h-screen px-1 py-2 md:flex md:items-center md:justify-center">
              {!isBtnLogin && !isBtnRegister && (
                <div className="rounded-2xl bg-white md:max-w-[500px] md:p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <div>
                        <Image
                          src="/assets/logo.png"
                          alt="Logo App"
                          width={25}
                          height={25}
                          className="w-full"
                        />
                      </div>
                      <Link
                        href="/"
                        className="text-xl font-bold tracking-wider"
                      >
                        gofood
                      </Link>
                    </div>
                    <Dialog open={isOpenLogin} onOpenChange={setIsOpenLogin}>
                      <div>
                        <DialogTrigger asChild>
                          <button>
                            <HiOutlineX size={25} color="green" />
                          </button>
                        </DialogTrigger>
                      </div>

                      <DialogContent className="flex flex-col items-start px-8">
                        <DialogTitle>Yakin mau ninggalin ini?</DialogTitle>
                        <p>
                          Ngasih tau ajaa. Kalau pergi, kamu harus ulangi proses
                          masuk dari awal.
                        </p>
                        <DialogClose asChild>
                          <Button
                            className="rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                            onClick={() => router.push('/')}
                          >
                            Iya, keluar
                          </Button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/assets/login_illustration.svg"
                      alt="illustration login"
                      width={400}
                      height={400}
                      className="w-full"
                    />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold">
                    Selamat datang di Gojek!
                  </h4>
                  <p className="mb-5 text-sm sm:text-base">
                    Aplikasi serba praktis yang siap bantuin semua kebutuhanmu,
                    kapanpun, dan dimanapun.
                  </p>
                  <Button
                    className="w-full rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                    onClick={() => setIsBtnLogin(true)}
                  >
                    Masuk
                  </Button>

                  <Button
                    className="w-full rounded-full border-2 border-green-700 bg-white p-2 text-base text-green-700 hover:bg-green-200 md:mb-4 md:p-5 lg:text-lg"
                    onClick={() => setIsBtnRegister(true)}
                  >
                    Belum ada akun? Daftar dulu
                  </Button>
                </div>
              )}

              {isBtnLogin && (
                <div className="rounded-2xl bg-white md:max-w-[500px] md:p-5">
                  <div className="mb-5 mt-3 flex items-center justify-between md:mb-20 md:mt-0">
                    <div className="flex items-center gap-5 ">
                      <HiArrowSmLeft
                        size={25}
                        color="green"
                        onClick={() => setIsBtnLogin(false)}
                        className="cursor-pointer"
                      />
                      <div className="flex items-center gap-3">
                        <div className="size-7">
                          <Image
                            src="/assets/logo.png"
                            alt="Logo App"
                            width={100}
                            height={100}
                            className="size-full"
                          />
                        </div>
                        <Link
                          href="/"
                          className="text-2xl font-bold tracking-wider"
                        >
                          gofood
                        </Link>
                      </div>
                    </div>
                    <HiQuestionMarkCircle size={25} color="green" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold">
                    Login ke akun gofood kamu
                  </h4>

                  <p className="mb-5 md:max-w-[400px]">
                    Buat masuk ke akunmu atau daftar kalau kamu baru di Gojek.
                  </p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem className="mb-3">
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input placeholder="username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="mb-3">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="password"
                                {...field}
                                type="password"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full rounded-full bg-green-700 p-2 text-base  md:mb-4 md:p-5 lg:text-lg"
                      >
                        Lanjut
                      </Button>
                    </form>
                  </Form>
                </div>
              )}

              {isBtnRegister && (
                <div className="rounded-2xl bg-white md:max-w-[500px] md:p-5">
                  <div className="mb-5 mt-3 flex items-center justify-between md:mb-20 md:mt-0">
                    <div className="flex items-center gap-5 ">
                      <HiArrowSmLeft
                        size={25}
                        color="green"
                        onClick={() => setIsBtnRegister(false)}
                        className="cursor-pointer"
                      />
                      <div className="flex items-center gap-3">
                        <div className="size-7">
                          <Image
                            src="/assets/logo.png"
                            alt="Logo App"
                            width={100}
                            height={100}
                            className="size-full"
                          />
                        </div>
                        <Link
                          href="/"
                          className="text-2xl font-bold tracking-wider"
                        >
                          gofood
                        </Link>
                      </div>
                    </div>
                    <HiQuestionMarkCircle size={25} color="green" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold">
                    Daftar akun go food baru
                  </h4>

                  <p className="mb-5 md:max-w-[400px]">
                    Buat masuk ke akunmu atau daftar kalau kamu baru di Gojek.
                  </p>
                  <Form {...formRegister}>
                    <form
                      onSubmit={formRegister.handleSubmit(onSubmitRegister)}
                    >
                      <FormField
                        control={formRegister.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem className="mb-3">
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input placeholder="username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={formRegister.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="mb-3">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="nama kamu"
                                {...field}
                                type="text"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={formRegister.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="mb-3">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="password"
                                {...field}
                                type="password"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full rounded-full bg-green-700 p-2 text-base  md:mb-4 md:p-5 lg:text-lg"
                      >
                        Lanjut
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Login;
