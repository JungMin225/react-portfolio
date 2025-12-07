// src/components/BrightSection.jsx
import React from "react";

import ShapeLeft from "../assets/images/bright-left.png";
import ShapeRight from "../assets/images/bright-right.png";
import ShapeBottom from "../assets/images/bright-bottom.png";

// ✅ 추가
import Reveal from "./motion/Reveal";
import RevealGroup from "./motion/RevealGroup";

function BrightSection() {
  return (
    <section className="section section-bright" aria-labelledby="bright-title">
      {/* 배경 도형 (패럴랙스 X, 그냥 포지션만) */}
      <img
        src={ShapeLeft}
        alt=""
        className="bright-shape bright-shape--left"
      />
      <img
        src={ShapeRight}
        alt=""
        className="bright-shape bright-shape--right"
      />
      <img
        src={ShapeBottom}
        alt=""
        className="bright-shape bright-shape--bottom"
      />

      <div className="bright-inner">
        <div className="bright-text">
          {/* ✅ 1) 타이틀 먼저 */}
          <Reveal as="h2" id="bright-title" className="bright-title-main">
            사용자 경험 개선의 밝은 시야
          </Reveal>

          {/* ✅ 2) 문장들 순차 등장 */}
          <RevealGroup className="" stagger={0.14} baseDelay={0.18}>
            <Reveal as="p" className="bright-subtitle">
              남향이 계절에 관계없이 꾸준히 빛을 제공하듯, <br />
              저는 사용자의 입장에서 항상 긍정적이고 밝은 시각으로
              인터페이스를 바라봅니다.
            </Reveal>

            <Reveal as="p" className="bright-body">
              저는 급변하는 프론트엔드 기술 트렌드 속에서도 꾸준히 학습하며
              저 자신을 발전시켜 나가는 자세를 갖추고 있습니다.
            </Reveal>

            <Reveal as="p" className="bright-body">
              저에게는 밝고 긍정적인 에너지, 협업을 이끄는 소통 능력, 그리고
              꾸준한 성장의 의지가 있습니다.
            </Reveal>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

export default BrightSection;
