// next-auth.d.ts
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * 사용자 세션의 타입을 확장합니다.
   */
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      nickname?: string; // 사용자 정의 필드 추가
      userClass?: string; // 사용자 정의 필드 추가
    }
  }

  /**
   * 사용자 프로필의 타입을 확장합니다.
   */
  interface User {
      nickname?: string; // 사용자 정의 필드 추가
      userClass?: string; // 사용자 정의 필드 추가
  }
}

declare module "next-auth/jwt" {
  /**
   * JWT의 타입을 확장합니다.
   */
  interface JWT {
    id?: string;
  }
}
