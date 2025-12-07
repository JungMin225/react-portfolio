// src/components/ProjectSection.jsx
import React, { useState } from "react";

import Qpid from "../assets/images/Qpid.png";
import TodayOndo from "../assets/images/TodayOndo.png";

const PROJECTS = [
  {
    id: 1,
    name: "Qpid",
    url: "https://myoxko.github.io/Qpid/",
    thumbnail: Qpid,
    alt: "교수와 학생을 잇는 지식 교류 서비스 Qpid 서비스 소개 웹사이트",
    summary:
    "교수와 학생을 잇는 지식 교류 서비스 Qpid 서비스 소개 웹사이트",
    program: "6인 제작 | React | 앱 서비스 소개 웹사이트 | 2025.08 - 2025.011",
    detail:
      "앱 서비스의 흐름을 한눈에 볼 수 있도록 정보 구조를 설계하고, 실제 서비스 플로우를 반영한 인터랙션을 구현했습니다. 메인 섹션별로 서비스의 핵심 기능과 사용 시나리오를 나누어 소개하며, 시각적인 계층 구조를 통해 사용자가 자연스럽게 스크롤을 이어갈 수 있도록 구성했습니다.",
  },
  {
    id: 2,
    name: "오늘의 온도",
    url: "https://jungmin225.github.io/todayondo/",
    thumbnail: TodayOndo,
    alt: "오늘의 온도 감정 게임 웹사이트",
    summary:
    "감정 선택에 따라 스토리가 달라지는 인터랙티브 웹 게임 ‘오늘의 온도’입니다.",
    program: "1인 제작 | JavaScript | 감정 선택형 시리어스 게임 | 2025.03 - 2025.06",
    detail:
      "사용자의 감정 선택에 따라 ‘감정 온도’가 변화하며 서로 다른 엔딩으로 분기되는 인터랙티브 게임입니다. 감정의 미세한 변화를 시각적 요소와 데이터 흐름으로 표현하기 위해 JavaScrip를 기반으로 개발하였으며, 사용자가 스스로의 정서를 탐색하고 위로받는 경험을 제공하는 것을 목표로 제작했습니다.",
  },
  {
    id: 3,
    name: "SoundGround",
    url: "https://example.com/soundground",
    thumbnail: Qpid,
    alt: "SoundGround 음악 놀이터 웹사이트",
    summary:
    "음악을 공유하고 놀 수 있는 웹 서비스 ‘SoundGround’의 프로토타입 페이지입니다.",
    program: "사용 프로그램",
    detail:
      "Node.js, Express, MongoDB를 사용해 로그인과 간단한 데이터 저장 구조를 만들고, React 없이도 EJS 템플릿과 CSS만으로 인터랙티브한 UI를 구성했습니다. 사용자의 취향을 중심으로 한 카드형 레이아웃과 playful한 모션을 통해 서비스의 톤앤매너를 표현했습니다.",
  },
];

function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const current = PROJECTS[currentIndex];

  const goTo = (index) => {
    const lastIndex = PROJECTS.length - 1;
    if (index < 0) {
      setCurrentIndex(lastIndex);
    } else if (index > lastIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const openSite = (project) => {
    if (!project.url) return;
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section id="projects" className="section section-projects">
      <h2 className="project-section-title">PROJECT</h2>

      <div className="project-slider">
        {/* 왼쪽 화살표 */}
        <button
          type="button"
          className="project-arrow project-arrow--left"
          onClick={() => goTo(currentIndex - 1)}
          aria-label="이전 프로젝트 보기"
        >
          ‹
        </button>

        {/* 가운데 썸네일 + 오버레이 */}
        <div
          className={
            "project-thumbnail-wrap" +
            (current.url ? "" : " is-disabled")
          }
          onClick={() => openSite(current)}
        >
          <img
            src={current.thumbnail}
            alt={current.alt}
            className="project-thumbnail-img"
          />

          {/* 검은 그라데이션 오버레이 */}
          <div className="project-overlay">
            <div className="project-overlay-inner">
              <div className="project-overlay-text">
                <h3 className="project-overlay-title">
                  {current.name}
                </h3>
                <p className="project-overlay-program">
                  {current.program}
                </p>
                <p className="project-overlay-summary">
                  {current.summary}
                </p>
              </div>

              <div className="project-overlay-actions">
                {/* 웹사이트 버튼 */}
                <button
                  type="button"
                  className="project-btn project-btn--ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    openSite(current);
                  }}
                  disabled={!current.url}
                >
                  웹사이트 →
                </button>

                {/* 더 보기 버튼 */}
                <button
                  type="button"
                  className="project-btn project-btn--primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(current);
                  }}
                >
                  더 보기 →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽 화살표 */}
        <button
          type="button"
          className="project-arrow project-arrow--right"
          onClick={() => goTo(currentIndex + 1)}
          aria-label="다음 프로젝트 보기"
        >
          ›
        </button>
      </div>

      {/* 하단 도트 네비게이션 */}
      <div className="project-dots">
        {PROJECTS.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={
              "project-dot" + (index === currentIndex ? " is-active" : "")
            }
            onClick={() => goTo(index)}
            aria-label={`${project.name} 프로젝트로 이동`}
          />
        ))}
      </div>

      {/* 더 보기 모달 */}
      {modalProject && (
        <div
          className="project-modal-backdrop"
          onClick={closeModal}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
              aria-label="닫기"
            >
              ×
            </button>

            <h3 className="project-modal-title">
              {modalProject.name}
            </h3>
            <p className="project-modal-program">
              {modalProject.program}
            </p>
            <p className="project-modal-summary">
              {modalProject.summary}
            </p>
            <p className="project-modal-detail">
              {modalProject.detail}
            </p>

            {modalProject.url && (
              <button
                type="button"
                className="project-btn project-btn--primary project-modal-link"
                onClick={() => openSite(modalProject)}
              >
                웹사이트 열기 →
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectSection;
