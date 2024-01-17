import React from "react";
import SectionHeader from "../Common/SectionHeader";
// import BlogItem from "./BlogItem";
import ProjectItem from "./ProjectItem";
import { Project } from "@/types/blog";
import BlogData from "./blogData";
import SideBar from "./SideBar";
import BlogClient from "./BlogClient";
import axios from 'axios';
import { useSession } from "next-auth/react";

// async function getMatchedTitles(realOddsData, projectData) {
//   const matchedTitles = realOddsData.map(oddsItem => {
//     const matchedProject = projectData.find(project => project.id === oddsItem.odds_id);
//     return matchedProject ? matchedProject.title : null;
//   });

//   return matchedTitles.filter(title => title !== null);
// }

// async function calculateOdds(realOddsData) {
//   // id_total 값들을 합산
//   const totalIdTotal = realOddsData.reduce((total, oddsItem) => total + oddsItem.id_total, 0);

//   // 배당률 계산 및 소수점 두 자리까지 반올림
//   const oddsWithRatio = realOddsData.map(oddsItem => {
//     const ratio = parseFloat((totalIdTotal / oddsItem.id_total).toFixed(2));
//     return { odds_id: oddsItem.odds_id, ratio };
//   });
//   return oddsWithRatio;
// }

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



const Blog = async () => {
  const ProjectData: Project[] = await getProjects();
  const realOddsData = await getRealOdds();

  // useEffect(() => {
  //   // 함수를 3초마다 호출
  //   const interval = setInterval(async () => {
  //     const realOddsData = await getRealOdds();
  //     const updatedOdds = await calculateAndSortOdds(realOddsData, ProjectData);
  //     // setBettingOdds(updatedOdds);
  //   }, 3000);

  //   // 컴포넌트 언마운트 시 clearInterval로 인터벌 제거
  //   return () => clearInterval(interval);
  // }, []); // useEffect는 한 번만 실행됨

  const sortedOdds = await calculateAndSortOdds(realOddsData, ProjectData);

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

  // async function getTopThree() {
  //   try {
  //     const response = await axios.get('http://43.203.146.160:3001/api/getTopThree');
  //     return response.data;
  //   } catch (error) {
  //     // 에러 처리
  //     console.error('API 호출 중 오류 발생:', error);
  //     throw error;
  //   }
  // }
  // async function getProjects() {
  //   try {
  //     const paramData = {
  //       class: 2
  //     }
  //     axios.post(`http://43.203.146.160:3001/api/getProjects`, paramData)
  //       .then(response => {
  //         // 성공적인 응답 처리
  //         console.log("프로젝트 정보를 불러왔습니다.");
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         // 오류 처리
  //         console.error('There was an error!', error);
  //       });
  //   } catch (error) {
  //     // 에러 처리
  //     console.error('API 호출 중 오류 발생:', error);
  //     throw error;
  //   }
  // }

  // const data = await getProjects();
  // console.log("데이터 불러와지는거냐구~")
  // console.log(data);

  // const oddsData = await getRealOdds();
  // console.log("데이터 불러와지는거냐구22~")
  // console.log(oddsData);

  // const topThree = await getTopThree();
  // console.log("데이터 불러와지는거냐구33~")
  // console.log(topThree);

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `[3주차]`,
              subtitle: `우리반 금픽`,
              description: `우리반 금픽 배팅하기`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0 ">
        <div className="grid grid-cols-12 gap-7.5 xl:gap-10">
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-5">
              {/* {BlogData.map((blog, key) => (
                <BlogItem blog={blog} key={key} />
              ))} */}
              {ProjectData.map((project, key) => (
                <ProjectItem project={project} key={key} />
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <BlogClient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
