import { loginUser } from '@/repositories/accountRepository';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await loginUser({
          username: credentials.username,
          password: credentials.password,
        });
        const user = response.data;
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session, user }) {
      if (trigger === 'update' && session.token && session.restaurant) {
        token.restaurant = session.restaurant;
        token.token = session.token;
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});
