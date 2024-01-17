"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// 가상 데이터
// const bettingOdds = [
//   { project: "플젝 1", odds: "1.5" },
//   { project: "플젝 2", odds: "2.0" },
//   { project: "플젝 3", odds: "1.8" },
// ];

const Sidebar = ({ bettingOdds }) => {
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
        <div className="sticky top-30">
          <h1 className="text-3xl font-bold text-black mb-4">[3주차] 2분반</h1>
          <h3 className="text-lg font-bold text-black mb-4"> · 실시간 배당률</h3>
          <li className="block">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-black px-4 py-2 w-2/3">프로젝트</th>
                  <th className="text-black px-4 py-2 w-1/3">배당률</th>
                </tr>
              </thead>
              <tbody>
                {bettingOdds.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="text-black px-4 py-2 w-2/3">{item.project}</td>
                    <td className="px-4 py-2 w-1/3">{item.odds}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </li>
        </div>
      </motion.div>

    </>
  );
};

export default Sidebar;
