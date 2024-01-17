"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PricingSingleItem from './pricingItem';
import { PricingItem } from "@/types/pricingItem";

const PricingClient = () => {
    const initialPricingItemState = {
        title: '데이터 로딩중',
        description: '',
        members: '',
        link: '',
        gold: false,
        rating: '',
    };

    const [pricingItemData1, setPricingItemData1] = useState(initialPricingItemState);
    const [pricingItemData2, setPricingItemData2] = useState(initialPricingItemState);
    const [pricingItemData3, setPricingItemData3] = useState(initialPricingItemState);

    async function getRealOdds() {
        try {
            // const response = await axios.get('http://43.203.146.160:3001/api/getRealOdds');
            const response = await axios.get('https://api.pickthegold.co.kr/api/getRealOdds');
            return response.data;
        } catch (error) {
            // 에러 처리
            console.error('API 호출 중 오류 발생:', error);
            throw error;
        }
    }
    async function getTopThree() {
        try {
            // const response = await axios.get('http://43.203.146.160:3001/api/getTopThree');
            const response = await axios.get('https://api.pickthegold.co.kr/api/getTopThree');
            return response.data;
        } catch (error) {
            // 에러 처리
            console.error('API 호출 중 오류 발생:', error);
            throw error;
        }
    }

    async function calculateTotal(realOddsData) {
        // id_total 값들을 합산
        const totalIdTotal = realOddsData.reduce((total, oddsItem) => total + oddsItem.id_total, 0);

        // 배당률 계산 및 소수점 두 자리까지 반올림
        // const oddsWithRatio = realOddsData.map(oddsItem => {
        //     const ratio = parseFloat((totalIdTotal / oddsItem.id_total).toFixed(2));
        //     return { odds_id: oddsItem.odds_id, ratio };
        // });
        return totalIdTotal;
    }

    useEffect(() => {
        const fetchData = async () => {
            const realOddsTotal = await getRealOdds();
            const topThreeData = await getTopThree();
            let totalCalculated = calculateTotal(realOddsTotal);
            console.log('topThreeData: ', topThreeData);
            // console.log('topThreeData0: ', topThreeData[0]);
            // console.log('topThreeData1: ', topThreeData[1]);
            // console.log('topThreeData2: ', topThreeData[2]);

            setPricingItemData1({
                title: topThreeData[0].title,
                description: topThreeData[0].brief,
                members: topThreeData[0].member_1 + ', ' + topThreeData[0].member_2,
                link: topThreeData[0].giturl,
                gold: true,
                rating: (await totalCalculated / topThreeData[0].id_total).toFixed(2)
            });
            setPricingItemData2({
                title: topThreeData[1].title,
                description: topThreeData[1].brief,
                members: topThreeData[1].member_1 + ', ' + topThreeData[1].member_2,
                link: topThreeData[1].giturl,
                gold: true,
                rating: (await totalCalculated / topThreeData[1].id_total).toFixed(2)
            });
            setPricingItemData3({
                title: topThreeData[2].title,
                description: topThreeData[2].brief,
                members: topThreeData[2].member_1 + ', ' + topThreeData[2].member_2,
                link: topThreeData[2].giturl,
                gold: false,
                rating: (await totalCalculated / topThreeData[2].id_total).toFixed(2)
            });

        };

        const interval = setInterval(fetchData, 3000);
        return () => clearInterval(interval);
    }, []);

    // 클라이언트 사이드에서 데이터를 렌더링합니다.
    return (
        <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            <PricingSingleItem item={pricingItemData1} />
            <PricingSingleItem item={pricingItemData2} />
            <PricingSingleItem item={pricingItemData3} />
        </div>
    );
};

export default PricingClient;
