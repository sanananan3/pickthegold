"use client";
import React, { useState, useEffect } from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  const [rotatedBrandData, setRotatedBrandData] = useState(brandData);
  const [slideClass, setSlideClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideClass('slide-left'); // 애니메이션 시작
      setTimeout(() => {
        setRotatedBrandData(prevData => {
          const newData = [...prevData];
          const firstItem = newData.shift();
          if (firstItem) {
            newData.push(firstItem);
          }
          return newData;
        });
        setSlideClass(''); // 애니메이션 리셋
      }, 500); // CSS의 transition 시간과 일치
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29 brand-container">
            {rotatedBrandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
