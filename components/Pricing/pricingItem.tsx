import React from 'react';
import { PricingItem } from '@/types/pricingItem';

type PricingSingleItemProps = {
    item: PricingItem;
};

function PricingSingleItem({ item }: PricingSingleItemProps) {
    return (
        <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
            {item.gold && (
                <div className="absolute -right-3.5 top-7 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-title font-bold uppercase text-white">
                    금픽 유력
                </div>
            )}
            <h2 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                {item.rating}
            </h2>

            <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h2 className="mb-7.5 text-3xl font-bold text-black dark:text-white">
                    {item.title}
                </h2>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    {item.members}
                </h4>
                <p>{item.description}</p>
            </div>

            {item.link && (
                <button
                    aria-label="Get the Plan button"
                    onClick={() => window.open(item.link, '_blank')}
                    className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                >
                    <span className="duration-300 group-hover/btn:pr-2">
                        프로젝트 보러가기
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" fill="currentColor" />
                    </svg>
                </button>
            )}

        </div>
    );
}

export default PricingSingleItem;