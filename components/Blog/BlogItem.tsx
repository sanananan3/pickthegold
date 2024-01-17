"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from "next-auth/react";

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { _id, mainImage, title, metadata } = blog;
  const [bettingAmount, setBettingAmount] = useState(0);
  const { data: session } = useSession();

  const handleBetting = async () => {
    console.log('배팅 전송, id: ', _id, ', amount: ', bettingAmount, ', email: ', session?.user?.email);
    try {
      const response = await axios.post('https://api.pickthegold.co.kr/api/bet', {
        proj_id: _id, // 배팅하는 항목의 ID
        amount: bettingAmount,
        email: session?.user?.email
      });
      // 성공적으로 배팅 정보를 전송한 후 처리
      setCookie("currentBalance", response.data, 7);
    } catch (error) {
      console.error('배팅 전송 실패:', error);
    }
  };
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/blog-details`}>
              {`${title}`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>

          {/* 배팅 기능 UI */}
          <div className="mt-5 flex items-center">
            <label htmlFor="bettingAmount" className="block w-15 text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">배팅 :</label>
            <div className="relative flex-grow mr-2">
              <input
                type="number"
                name="bettingAmount"
                id="bettingAmount"
                className="focus:ring-primary focus:border-primary block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md h-10" // 높이 조절
                placeholder="0"
                aria-describedby="bettingAmount-currency"
                onChange={(e) =>
                  setBettingAmount(Number(e.target.value))
                }
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="bettingAmount-currency">
                  원
                </span>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleBetting}
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary h-10"
            >
              <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default BlogItem;
