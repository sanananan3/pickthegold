import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './modal.css';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  let { title, week, class: classNum, member_1, member_2, member_3, brief, readme, giturl } = project;

  readme = readme.trim().replace(/^"|"$/g, '');
  readme = readme.replace(/\\n/g, '\n').replace(/\\t/g, '\t');;

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) { // 27은 ESC 키의 키 코드
      onClose(); // ESC 키를 누르면 onClose 함수 호출
    }
  };

  // 컴포넌트가 마운트되거나 isOpen이 변경될 때마다 실행
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="lg:w-[100%]">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <div className="modal-backdrop">
                <div className="modal-content">
                  <button className="close-button" onClick={onClose}>닫기</button>
                  <h2>{title}</h2>
                  <p>{brief}</p>

                  <ul>
                    {week && <li>주: {week}</li>}
                    {classNum && <li>분반: {classNum}</li>}
                    {member_1 && <li>팀원 1: {member_1}</li>}
                    {member_2 && <li>팀원 2: {member_2}</li>}
                    {member_3 && <li>팀원 3: {member_3}</li>}
                  </ul>

                  <div className="markdown-body">
                    <ReactMarkdown>{readme}</ReactMarkdown>
                  </div>

                  <a href={giturl} target="_blank">GitHub 링크</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
