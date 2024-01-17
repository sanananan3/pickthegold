"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import EndingModal from "@/components/Ending";
const inter = Inter({ subsets: ["latin"] });

import NextTopLoader from "nextjs-toploader";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [announcement, setAnnouncement] = useState("시간이 종료되었습니다!");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const scheduledTime = "2024-01-17 00:08:00";
    console.log(scheduledTime);

    const checkScheduledTime = () => {
      const currentTime = new Date();
      const targetTime = new Date(scheduledTime);
      console.log(currentTime, targetTime);

      if (currentTime >= targetTime) {
        console.log("show modal");
        setShowModal(true);
        // 이후에는 이 함수가 실행되지 않도록 제거
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(checkScheduledTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <AuthProvider>
            <Header />
            <ToasterContext />
            {children}
            <EndingModal
              announcement={announcement}
              isOpen={showModal}
              onClose={() => setShowModal(false)}
            />
            <Footer />
            <ScrollToTop />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
