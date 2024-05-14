'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  HiOutlineX,
  HiArrowSmLeft,
  HiQuestionMarkCircle,
  HiOutlineChevronDown,
} from 'react-icons/hi';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formNoPhoneSchema } from '@/lib/validation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Login = () => {
  const [isBtnLogin, setIsBtnLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formNoPhoneSchema>>({
    resolver: zodResolver(formNoPhoneSchema),
    defaultValues: {
      noPhone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formNoPhoneSchema>) {
    console.log(values);
  }

  const {
    formState: { isValid },
  } = form;

  return (
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
          {!isBtnLogin && (
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
                  <Link href="/" className="text-xl font-bold tracking-wider">
                    gofood
                  </Link>
                </div>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              <h4 className="mb-3 text-xl font-semibold">Masukkan nomor HP</h4>

              <p className="mb-5 md:max-w-[400px]">
                Buat masuk ke akunmu atau daftar kalau kamu baru di Gojek.
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div>
                    <p className=" mb-2 font-bold">
                      Nomor HP <span className="text-red-500">*</span>
                    </p>
                    <FormField
                      control={form.control}
                      name="noPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Badge className="mb-3  flex items-center gap-2 border-slate-100 bg-transparent hover:bg-transparent md:mb-20">
                              <p className="text-2xl font-bold text-black">
                                ID
                              </p>
                              <div className="flex items-center gap-1">
                                <span className="text-lg text-black">+62</span>
                                <HiOutlineChevronDown color="black" />
                                <span className="text-black">|</span>
                              </div>

                              <Input
                                placeholder="81323456789"
                                className="remove-arrow border-0 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                onKeyDown={(e) => {
                                  if (e.key === 'Backspace') {
                                    return;
                                  }

                                  if (!/\d/g.test(e.key)) {
                                    e.preventDefault();
                                  }
                                }}
                                {...field}
                              />
                            </Badge>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    disabled={!isValid}
                    type="submit"
                    className={` w-full rounded-full bg-green-700 p-2 text-base disabled:bg-slate-500 disabled:text-black md:mb-4 md:p-5 lg:text-lg ${!isValid ? 'mt-4' : 'mt-0'}`}
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
  );
};

export default Login;
