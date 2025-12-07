// src/components/BrightSection.jsx
import React, { useMemo, useRef } from "react";

import ShapeLeft from "../assets/images/bright-left.png";
import ShapeRight from "../assets/images/bright-right.png";
import ShapeBottom from "../assets/images/bright-bottom.png";

import Reveal from "./motion/Reveal";
import RevealGroup from "./motion/RevealGroup";
import TiltItem from "./motion/TiltItem";
import useSectionTilt from "./motion/useSectionTilt";

function BrightSection() {
  const sectionRef = useRef(null);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const bottomRef = useRef(null);

  // 각 이미지별 틸트 강도 설정
  const tiltItems = useMemo(
    () => [
      { ref: leftRef, maxTilt: 30, lift: 30, scale: 1.02 },
      { ref: rightRef, maxTilt: 20, lift: 40, scale: 1.03 },
      { ref: bottomRef, maxTilt: 17, lift: 60, scale: 1.02 },
    ],
    []
  );

  useSectionTilt(sectionRef, tiltItems);

  return (
    <section
      ref={sectionRef}
      className="section section-bright"
      aria-labelledby="bright-title"
    >
      <TiltItem
        ref={leftRef}
        src={ShapeLeft}
        alt=""
        className="bright-shape bright-shape--left"
      />

      <TiltItem
        ref={rightRef}
        src={ShapeRight}
        alt=""
        className="bright-shape bright-shape--right"
      />

      <TiltItem
        ref={bottomRef}
        src={ShapeBottom}
        alt=""
        className="bright-shape bright-shape--bottom"
      />

      <div className="bright-inner">
        <div className="bright-text">
          <Reveal as="h2" id="bright-title" className="bright-title-main">
            사용자 경험 개선의 밝은 시야
          </Reveal>

          <RevealGroup stagger={0.14} baseDelay={0.18}>
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
