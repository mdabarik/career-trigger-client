import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const MAX_EXPIRE_DATE = 60 * 60 * 24 * 30;
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          `http://localhost:3001/api/users/user?email=${credentials?.email}`
        );
        if (!res.ok) return null;

        const user = await res.json();
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.passwordHash
        );
        if (!isValid) return null;

        return {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: MAX_EXPIRE_DATE,
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        return true;
      }

      const res = await fetch(
        `http://localhost:3001/api/users/user?email=${user?.email}`
      );

      const jsonRES = await res.json();
      const existingUser = jsonRES?.data;

      // console.log("existing user", existingUser);

      if (!existingUser) {
        // console.log("user,", user);
        const createRes = await fetch("http://localhost:3001/api/users/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user?.email,
            name: user?.name,
            provider: account?.provider,
            photoUrl: user?.image,
            role: "user",
          }),
        });
        // console.log("createRes", createRes);
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = user.access_token;
      }

      return token;
    },

    // async session({ session, token }) {
    //   const payload = { id: token.id, email: token.email, role: token.role };
    //   const signedJwt = jwt.sign(payload, process.env.NEXTAUTH_SECRET!, {
    //     expiresIn: MAX_EXPIRE_DATE,
    //   });
    //   (session as any).jwt = signedJwt;
    //   return session;
    // },

    async session({ session, token, user }) {
      session.accessToken = "acess token";
      session.jwt = "amr.jwt";
      session.user.id = token.id;

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
