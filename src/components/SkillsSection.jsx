// src/components/SkillsSection.jsx
import React, { useState, useRef, useEffect, useMemo } from "react";

import programmingIcon from "../assets/images/skill-react.png";
import designIcon from "../assets/images/skill-html.png";
import planningIcon from "../assets/images/skill-js.png";

const CATEGORIES = [
  { key: "programming", label: "● 프로그래밍" },
  { key: "design", label: "● 디자인" },
  { key: "planning", label: "● 기획" },
];

const SKILLS = [
  // ===== 프로그래밍 =====
  {
    id: 1,
    key: "html",
    category: "programming",
    label: "[1]",
    titleLine1: "HTML",
    titleLine2: "",
    description: [
      "● HTML5로 웹페이지의 기본 구조를 설계",
      "",
      "● 콘텐츠의 의미에 맞는 시맨틱 태그를 선택해 마크업",
      "",
      "● 제목 구조와 대체 텍스트 등 접근성을 고려한 구조로 정리",
    ],
    iconSrc: programmingIcon,
  },
  {
    id: 2,
    key: "css",
    category: "programming",
    label: "[2]",
    titleLine1: "CSS",
    titleLine2: "",
    description: [
      "● Flex와 Grid를 활용해 레이아웃을 구성",
      "",
      "● 반응형 디자인으로 다양한 화면 크기에서 깨지지 않는 UI 구현",
      "",
      "● 색상, 타이포그래피, 여백 등을 토큰처럼 정리해 일관된 스타일 유지",
      "",
      "● 호버·트랜지션을 사용하여 인터랙션 구현",
    ],
    iconSrc: programmingIcon,
  },
  {
    id: 3,
    key: "js",
    category: "programming",
    label: "[3]",
    titleLine1: "JAVA",
    titleLine2: "SCRIPT",
    description: [
      "● ES6 기준의 변수, 함수, 조건문·반복문, 배열·객체 다루기 이해",
      "",
      "● DOM을 제어해 동적인 화면 구현",
      "",
      "● 이벤트 리스너와 상태 값을 이용해 입력에 따라 화면을 바꾸는 인터랙션 구현",
    ],
    iconSrc: programmingIcon,
  },
  {
    id: 4,
    key: "react",
    category: "programming",
    label: "[4]",
    titleLine1: "REACT",
    titleLine2: "",
    description: [
      "● props와 state를 사용해 재사용 가능한 UI 제작",
      "",
      "● useState, useEffect, React Router를 활용",
      "",
      "● 단일 페이지에서 섹션/페이지 전환이 이뤄지는 프로젝트 구현",
    ],
    iconSrc: programmingIcon,
  },

  // ===== 디자인 =====
  {
    id: 5,
    key: "figma",
    category: "design",
    label: "[5]",
    titleLine1: "Figma",
    titleLine2: "",
    description: [
      "● Figma로 와이어프레임, 프로토타입, 컴포넌트 기반 UI 설계",
      "",
      "● 오토 레이아웃과 그리드 시스템을 활용해 반응형 구조를 설계",
    ],
    iconSrc: designIcon,
  },
  {
    id: 6,
    key: "illustrator",
    category: "design",
    label: "[6]",
    titleLine1: "Illustrator",
    titleLine2: "",
    description: [
      "● Illustrator로 아이콘, 그래픽, 이미지 편집",
      "",
      "● 패스파인더/펜툴을 활용해 형태를 정교하게 다듬고 변형",
      "",
      "● 브랜드 톤에 맞춘 심볼/패턴 디자인을 구성",
    ],
    iconSrc: designIcon,
  },
  {
    id: 7,
    key: "photoshop",
    category: "design",
    label: "[7]",
    titleLine1: "Photoshop",
    titleLine2: "",
    description: [
      "● Photoshop으로 이미지 보정, 합성, 리터칭 작업 수행",
      "",
      "● 웹/모바일 화면용 시안 제작 및 썸네일/배너 이미지 제작",
      "",
      "● 색감과 질감 조절로 시각적 톤을 프로젝트에 맞게 정리",
    ],
    iconSrc: designIcon,
  },
  {
    id: 8,
    key: "afterEffect",
    category: "design",
    label: "[8]",
    titleLine1: "After Effect",
    titleLine2: "",
    description: [
      "● After Effect로 간단한 모션 그래픽과 타이포 애니메이션 제작",
      "",
      "● 키프레임/그래프 에디터를 활용해 자연스러운 속도감 구현",
      "",
      "● 프리셋/기본 이펙트를 활용해 효율적인 편집 흐름 유지",
    ],
    iconSrc: designIcon,
  },
  {
    id: 9,
    key: "premierePro",
    category: "design",
    label: "[9]",
    titleLine1: "Premiere Pro",
    titleLine2: "",
    description: [
      "● Premiere Pro로 컷 편집, 자막, 기본 색보정 중심의 영상 편집",
      "",
      "● 콘텐츠 목적에 맞게 흐름과 리듬을 고려한 편집 구성",
      "",
      "● 프로젝트 소개/시연 영상 등 포트폴리오용 영상 제작 가능",
    ],
    iconSrc: designIcon,
  },

  // ===== 기획 =====
  {
    id: 10,
    key: "powerPoint",
    category: "planning",
    label: "[10]",
    titleLine1: "PowerPoint",
    titleLine2: "",
    description: [
      "● PowerPoint로 프로젝트 발표 자료 구조화 및 시각화",
      "",
      "● 문제 정의 → 목표 → 솔루션 → 기대효과 흐름으로 스토리라인 구성",
      "",
      "● 도식/다이어그램을 활용해 정보 우선순위를 명확하게 전달",
    ],
    iconSrc: planningIcon,
  },
  {
    id: 11,
    key: "notion",
    category: "planning",
    label: "[11]",
    titleLine1: "Notion",
    titleLine2: "",
    description: [
      "● Notion으로 프로젝트 일정, 회의 기록, 레퍼런스 등을 체계적으로 정리",
      "",
      "● 협업용 작업 보드와 공유 페이지 구성 가능",
      "",
      "● 프로젝트 과정과 근거를 기록하는 문서화 습관 유지",
    ],
    iconSrc: planningIcon,
  },
  {
    id: 12,
    key: "word",
    category: "planning",
    label: "[12]",
    titleLine1: "Word",
    titleLine2: "",
    description: [
      "● Word로 기획서, 보고서, 제안서 등 문서 기반 결과물을 작성",
      "",
      "● 표/목차/스타일 기능을 활용해 형식이 정돈된 문서 제작",
    ],
    iconSrc: planningIcon,
  },
];

function SkillsSection() {
  const [activeKey, setActiveKey] = useState(SKILLS[0].key);

  const skillsGridRef = useRef(null);
  const skillItemRefs = useRef({});
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const activeSkill = useMemo(
    () => SKILLS.find((s) => s.key === activeKey),
    [activeKey]
  );
  const activeCategory = activeSkill?.category ?? "programming";

  /** 특정 스킬 카드 위치로 스크롤 + 활성화 */
  const scrollToSkill = (key) => {
    const grid = skillsGridRef.current;
    const el = skillItemRefs.current[key];
    if (grid && el) {
      // offset 기반보다 살짝 더 안전한 방식
      const left = el.offsetLeft;
      grid.scrollTo({ left, behavior: "smooth" });
    }
    setActiveKey(key);
  };

  /** 카테고리 버튼 클릭 시: 해당 카테고리의 첫 스킬로 이동 */
  const handleCategoryClick = (categoryKey) => {
    const firstSkill = SKILLS.find((s) => s.category === categoryKey);
    if (firstSkill) scrollToSkill(firstSkill.key);
  };

  /** ✅ wheel을 native로 붙여서 passive 문제 제거 */
  useEffect(() => {
    const grid = skillsGridRef.current;
    if (!grid) return;

    const handleWheelNative = (e) => {
      // 세로 입력을 가로 이동으로 변환
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        grid.scrollLeft += e.deltaY;
      }
    };

    grid.addEventListener("wheel", handleWheelNative, { passive: false });
    return () => grid.removeEventListener("wheel", handleWheelNative);
  }, []);

  /** 드래그 시작 */
  const handleMouseDown = (e) => {
    const grid = skillsGridRef.current;
    if (!grid) return;

    dragState.current.isDown = true;
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = grid.scrollLeft;
    grid.classList.add("is-dragging");
  };

  /** 드래그 중 */
  const handleMouseMove = (e) => {
    const grid = skillsGridRef.current;
    if (!grid || !dragState.current.isDown) return;

    e.preventDefault();
    const dx = e.clientX - dragState.current.startX;
    grid.scrollLeft = dragState.current.scrollLeft - dx;
  };

  /** 드래그 종료 */
  const endDrag = () => {
    const grid = skillsGridRef.current;
    dragState.current.isDown = false;
    if (grid) grid.classList.remove("is-dragging");
  };

  /** 🔁 5초마다 자동 이동 */
  useEffect(() => {
    const timer = setInterval(() => {
      if (dragState.current.isDown) return;

      const currentIndex = SKILLS.findIndex((s) => s.key === activeKey);
      if (currentIndex === -1) return;

      const nextIndex = (currentIndex + 1) % SKILLS.length;
      scrollToSkill(SKILLS[nextIndex].key);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeKey]);

  return (
    <section id="skills" className="section section-skills">
      <div className="skills-inner">
        <h2 className="skills-title">SKILL</h2>

        <div className="skills-category-nav">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={
                "skills-category-btn" +
                (activeCategory === cat.key ? " is-active" : "")
              }
              onClick={() => handleCategoryClick(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          className="skills-grid"
          ref={skillsGridRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
        >
          {SKILLS.map((skill) => {
            const isActive = activeKey === skill.key;

            return (
              <button
                key={skill.key}
                type="button"
                ref={(el) => {
                  if (el) skillItemRefs.current[skill.key] = el;
                }}
                className={`skill-col ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => {
                  if (dragState.current.isDown) return;
                  setActiveKey(skill.key);
                }}
                onClick={(e) => e.preventDefault()}
              >
                <div className="skill-col-header">
                  <span className="skill-index">{skill.label}</span>

                  <div className="skill-main">
                    <div className="skill-title-wrap">
                      <span className="skill-title-line">
                        {skill.titleLine1}
                      </span>
                      {skill.titleLine2 && (
                        <span className="skill-title-line">
                          {skill.titleLine2}
                        </span>
                      )}
                    </div>

                    {skill.iconSrc && (
                      <div className="skill-icon-wrap">
                        <img src={skill.iconSrc} alt="" className="skill-icon" />
                      </div>
                    )}
                  </div>
                </div>

                <div className={"skill-col-body" + (isActive ? " is-active" : "")}>
                  {skill.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
