import { prisma } from "@/app/libs/prismaDB";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import EmailProvider from "next-auth/providers/email";

import bcrypt from "bcrypt";

import { AdapterUser } from "next-auth/adapters";
import toast from "react-hot-toast";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }): Promise<string | boolean> {
      // 로그인 로직
      console.log("로그인 성공");
      console.log(user);
      console.log("로그인 성공");
      return true; // 로그인 성공
    },
    session: async ({ session, user }) => {
      // user 객체에는 데이터베이스에서 불러온 사용자 정보가 포함되어 있음
      if (user) {
        // 사용자의 정보를 세션 객체에 추가
        session.user.id = user.id;
        session.user.nickname = user.nickname;
        session.user.email = user.email;
        session.user.userClass = user.userClass;
        // 필요한 경우 더 많은 사용자 정보를 추가할 수 있음
      }
  
      return session; // 수정된 세션 객체 반환
    },
    
    async redirect({ url, baseUrl }) {
      // Default redirect
      return baseUrl + '/auth/signin';
    },

  },

  providers: [
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "Young" },
    //     password: { label: "Password", type: "password" },
    //   },

    //   async authorize(credentials) {
    //     // check to see if eamil and password is there
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error("Please enter an email or password");
    //     }

    //     // check to see if user already exist
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials.email,
    //       },
    //     });

    //     // if user was not found
    //     if (!user || !user?.password) {
    //       throw new Error("No user found");
    //     }

    //     // check to see if passwords match
    //     const passwordMatch = await bcrypt.compare(
    //       credentials.password,
    //       user.password,
    //     );

    //     if (!passwordMatch) {
    //       throw new Error("Incorrect password");
    //     }

    //     return user;
    //   },
    // }),

    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: Number(process.env.EMAIL_SERVER_PORT),
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        }
      },
    }),

    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
  ],

  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
