import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "홈",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "우리반 금픽",
    newTab: false,
    path: "/feature/class",
  },
  {
    id: 2.1,
    title: "이번주 금픽",
    newTab: false,
    path: "/feature/camp",
  },
  {
    id: 3,
    title: "나의 플젝",
    newTab: false,
    path: "/docs",
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // }
];

export default menuData;
