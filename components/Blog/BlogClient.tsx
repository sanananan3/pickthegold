"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from './SideBar';

const BlogClient = () => {
    const [sortedOdds, setSortedOdds] = useState([]);

    async function getProjects() {
        try {
            const response = await axios.get('http://43.203.146.160:3001/api/getProjects');
            return response.data;
        } catch (error) {
            // 에러 처리
            console.error('API 호출 중 오류 발생:', error);
            throw error;
        }
    }

    async function getRealOdds() {
        try {
            const response = await axios.get('http://43.203.146.160:3001/api/getRealOdds');
            return response.data;
        } catch (error) {
            // 에러 처리
            console.error('API 호출 중 오류 발생:', error);
            throw error;
        }
    }

    async function calculateAndSortOdds(realOddsData, projectData) {
        // Calculate odds with ratio
        const totalIdTotal = realOddsData.reduce((total, oddsItem) => total + oddsItem.id_total, 0);
        const oddsWithRatio = realOddsData.map(oddsItem => {
            const ratio = parseFloat((totalIdTotal / oddsItem.id_total).toFixed(2));
            return { odds_id: oddsItem.odds_id, ratio };
        });

        // Sort odds by ratio in ascending order
        oddsWithRatio.sort((a, b) => a.ratio - b.ratio);

        // Get matched project titles
        const matchedTitles = oddsWithRatio.map(oddsItem => {
            const matchedProject = projectData.find(project => project.id === oddsItem.odds_id);
            return matchedProject ? matchedProject.title : null;
        });

        // Filter out null titles
        const filteredTitles = matchedTitles.filter(title => title !== null);

        // Combine titles and ratios into an array of objects
        const result = filteredTitles.map((title, index) => ({
            project: title,
            odds: oddsWithRatio[index].ratio
        }));

        return result;
    }

    useEffect(() => {
        const fetchData = async () => {
            const realOddsData = await getRealOdds();
            const projectData = await getProjects(); // 이 함수는 별도로 정의되어야 합니다.
            const updatedOdds = await calculateAndSortOdds(realOddsData, projectData);
            setSortedOdds(updatedOdds);
        };

        const interval = setInterval(fetchData, 3000);
        return () => clearInterval(interval);
    }, []);

    // 클라이언트 사이드에서 데이터를 렌더링합니다.
    return (
        <div>
            <SideBar bettingOdds={sortedOdds} />
        </div>
    );
};

export default BlogClient;
