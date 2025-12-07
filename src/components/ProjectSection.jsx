import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

import Qpid from "../assets/images/Qpid.png";
import QpidVideo from "../assets/images/Qpid_Video.mp4";
import QpidIA from "../assets/images/Qpid_IA.png";
import QpidKeyService from "../assets/images/Qpid_KeyService.png";

import TodayOndo from "../assets/images/TodayOndo.png";
import TodayOndo1 from "../assets/images/TodayOndo1.png";
import TodayOndoCharacter from "../assets/images/TodayOndo_Character.png";


import NewJeans from "../assets/images/NewJeans.png";
import NewJeansDesign from "../assets/images/NewJeans_Design.png";


// 예시: 추가 이미지/영상
// import QpidDetail1 from "../assets/images/qpid-detail-1.png";
// import QpidDemoMp4 from "../assets/videos/qpid-demo.mp4";

const PROJECTS = [
  {
    id: 1,
    name: "Qpid",
    url: "https://myoxko.github.io/Qpid/",
    thumbnail: Qpid,
    alt: "교수와 학생을 잇는 지식 교류 서비스 Qpid 서비스 소개 웹사이트",
    summary: "교수와 학생을 잇는 지식 교류 서비스 Qpid 서비스 소개 웹사이트",
    program: "6인 제작 | React | 앱 서비스 소개 웹사이트 | 2025.08 - 2025.011",
    detail:
      "앱 서비스의 흐름을 한눈에 볼 수 있도록 정보 구조를 설계하고, 실제 서비스 플로우를 반영한 인터랙션을 구현했습니다. 메인 섹션별로 서비스의 핵심 기능과 사용 시나리오를 나누어 소개하며, 시각적인 계층 구조를 통해 사용자가 자연스럽게 스크롤을 이어갈 수 있도록 구성했습니다.",

    media: [
      {
        type: "image",
        src: Qpid,
        alt: "Qpid 대표 화면",
        caption: "서비스의 톤앤매너와 핵심 구조를 담은 대표 화면입니다.",
      },

      {
        type: "text",
        title: "기획 포인트",
        body:
          "교수와 학생의 지식 흐름이 단절되지 않도록, 서비스의 정보 구조(IA)와 상호작용 흐름을 먼저 설계했습니다. " +
          "사용자가 페이지를 따라가며 기능을 자연스럽게 이해할 수 있도록 섹션별 핵심 메시지와 시각적 계층 구조를 정리했습니다.",
      },

      {
        type: "image",
        src: QpidIA,
        alt: "Qpid 기능 소개 화면 1",
        caption: "유저 플로우 설명 화면입니다.",
      },
      
      {
        type: "image",
        src: QpidKeyService,
        alt: "Qpid 기능 소개 화면 1",
        caption: "핵심 서비스를 설명한 화면입니다.",
      },

      {
        type: "video",
        src: QpidVideo,
        poster: Qpid,
        caption: "서비스 내용을 담은 영상입니다.",
      },
    ],
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
      "건강한 감정 표현 연습을 위한 자바스크립트 기반 선택형 게임입니다. 감정의 미세한 변화를 시각적 요소와 데이터 흐름으로 표현하기 위해 JavaScrip를 기반으로 개발하였으며, 선택지에 따라 '감정의 온도'가 변화하며 온도에 따라 다른 엔딩으로 분기됩니다. 사용자가 스스로의 정서를 탐색하고 위로받는 경험을 제공하며, 자기 감정을 건강하게 표현하는 연습이 되는 것을을 목표로 제작했습니다 ",

    media: [
      // 1) 대표 이미지
      {
        type: "image",
        src: TodayOndo,
        alt: "오늘의 온도 대표 화면",
        caption: "감정 온도 콘셉트를 중심으로 한 대표 화면입니다.",
      },

      // 2) 중간 텍스트
      {
        type: "text",
        title: "게임 구조",
        body:
          "감정 선택 → 온도 변화 → 내러티브 분기라는 흐름을 기반으로 설계했습니다. " +
          "사용자가 ‘감정의 변화’를 직관적으로 느끼도록, 선택 결과와 화면 연출의 연결 관계를 명확하게 구성했습니다.",
      },

      // 3) 진행 화면 이미지
      {
        type: "image",
        src: TodayOndoCharacter,
        alt: "캐릭터 소개",
        caption: "주인공을 포함한 총 다섯섯 명의 등장인물이 나오며, 학교 생활, 가족, 친구 등 상황에 따라 캐릭터 디자인을 하였습니다.",
      },
      
      {
        type: "image",
        src: TodayOndo1,
        alt: "오늘의 온도 진행 화면",
        caption: "오늘의 온도 게임 진행 화면입니다.",
      },
    ],
  },

  {
    id: 3,
    name: "New Jeans",
    url: "https://jungmin225.github.io/NewJeans/",
    thumbnail: NewJeans,
    alt: "레트로 퓨처리즘 + Y2K 무드로 구성한 NewJeans 팬 웹사이트",
    summary:
      "NewJeans의 음악과 비주얼 아이덴티티를 레트로 퓨처리즘 + Y2K 감성으로 재해석한 인터랙티브 웹 퍼블리싱 사이트",
    program: "1인 제작 | HTML, CSS | 뉴진스 소개 웹사이트 | 2024.09 - 2024.12",
    detail:
      "NewJeans의 팀/곡 이미지를 기반으로 ‘레트로 퓨처리즘 + Y2K’ 키워드를 시각·인터랙션 구조에 녹여낸 팬 기반 웹사이트입니다." +
      "전체적으로 밝고 활기찬 색 조합과 둥근 형태의 UI를 사용해 1990~2000년대 초 디지털 감성을 현대적으로 재구성한 것이 핵심입니다.",

    media: [
      {
        type: "image",
        src: NewJeans,
        alt: "NewJeans 메인(Home) 화면",
        caption: "레트로 퓨처리즘 기반의 배경 그라데이션과 슬라이드, 장식 요소로 팀의 톤앤매너를 강조한 메인 화면입니다.",
      },

      {
        type: "text",
        title: "기획 포인트",
        body:
          "‘팬이 머무는 작은 놀이터’라는 방향으로 Home / Game / New 3개의 탭 구조를 설정했습니다. " +
          "메인에서 팀의 무드와 서사를 먼저 체감하고, 게임으로 참여 경험을 제공한 다음, 멤버 소개로 정보를 정리하는 흐름입니다. " +
          "첨부 자료의 가수 소개 및 대표곡 정보(Attention, Hype Boy, Ditto, OMG)를 콘텐츠 톤과 인터랙션 소재로 활용했습니다.",
      },

      {
        type: "text",
        title: "디자인 콘셉트",
        body:
          "무드보드에서 제시된 ‘레트로 퓨처리즘 + Y2K’ 키워드를 중심으로, " +
          "파스텔 기반의 선명한 컬러 조합과 둥근 버튼/프레임, 스티커형 그래픽 느낌을 사용했습니다. " +
          "밝음·활기·긍정의 정서를 유지하면서도, 초기 디지털/사이버 질감을 연상시키는 라인과 그라데이션을 배치했습니다.",
      },
      
      {
        type: "image",
        src: NewJeansDesign,
        alt: "오늘의 온도 진행 화면",
        caption: "디자인 컴포넌트입니다.",
      },

      {
        type: "text",
        title: "구현 포인트",
        body:
          "① Sticky 헤더로 페이지 전환 시에도 내비게이션 가시성을 유지했습니다. " +
          "② 이미지 슬라이드는 keyframes 기반 fade 애니메이션으로 구현했습니다. " +
          "③ :target 방식 모달을 사용해 JS 의존도를 낮춘 인터랙션을 구성했습니다. " +
          "④ 오디오 자동재생 제한을 고려해 body 클릭 후 재생되는 보완 스크립트를 적용했습니다. " +
          "⑤ 타이머 바 애니메이션으로 게임의 긴장감을 시각적으로 전달했습니다. " +
          "⑥ 커스텀 스크롤바와 커서 이미지를 통해 팬사이트 특유의 장난스럽고 레트로한 질감을 강화했습니다.",
      },
    ],
  },
];


function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const current = PROJECTS[currentIndex];

  const goTo = (index) => {
    const lastIndex = PROJECTS.length - 1;
    if (index < 0) setCurrentIndex(lastIndex);
    else if (index > lastIndex) setCurrentIndex(0);
    else setCurrentIndex(index);
  };

  return (
    <section id="projects" className="section section-projects">
      <h2 className="project-section-title">PROJECT</h2>

      <div className="project-slider">
        <button
          type="button"
          className="project-arrow project-arrow--left"
          onClick={() => goTo(currentIndex - 1)}
        >
          ‹
        </button>

        <div className={"project-thumbnail-wrap" + (current.url ? "" : " is-disabled")}>
          <img
            src={current.thumbnail}
            alt={current.alt}
            className="project-thumbnail-img"
          />

          <div className="project-overlay">
            <div className="project-overlay-inner">
              <div className="project-overlay-text">
                <h3 className="project-overlay-title">{current.name}</h3>
                <p className="project-overlay-program">{current.program}</p>
                <p className="project-overlay-summary">{current.summary}</p>
              </div>

              <div className="project-overlay-actions">
                <button
                  type="button"
                  className="project-btn project-btn--ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (current.url) window.open(current.url, "_blank", "noopener,noreferrer");
                  }}
                  disabled={!current.url}
                >
                  웹사이트 →
                </button>

                <button
                  type="button"
                  className="project-btn project-btn--primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalProject(current);
                  }}
                >
                  더 보기 →
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="project-arrow project-arrow--right"
          onClick={() => goTo(currentIndex + 1)}
        >
          ›
        </button>
      </div>

      <div className="project-dots">
        {PROJECTS.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={"project-dot" + (index === currentIndex ? " is-active" : "")}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      {/* ✅ 모달은 분리 컴포넌트로 */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}

export default ProjectSection;
