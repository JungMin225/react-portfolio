// src/components/AboutSection.jsx
import React from "react";
import Reveal from './motion/Reveal';
import RevealGroup from './motion/RevealGroup';

function AboutSection() {
  return (
    <section
      id="about"
      className="section section-about"
      aria-labelledby="about-title"
    >
      <div className="about-inner">

        <RevealGroup className="" stagger={0.12}>
          <Reveal as="h2" id="about-title" className="about-title">
            ABOUT
          </Reveal>
        </RevealGroup>

        <RevealGroup className="about-grid" stagger={0.18}>

          {/* ===== LEFT COLUMN ===== */}
          <Reveal as="div" className="about-col">
            {/* 컬럼 내부 블록 순차 */}
            <RevealGroup stagger={0.12}>

              {/* Profile */}
              <Reveal as="div" className="about-block">
                <h3 className="about-block-title">Profile</h3>
                <div className="about-rows">
                  {/* row도 순차로 하고 싶으면 Reveal로 감싸기 */}
                  <Reveal as="div" className="about-row">
                    <span className="about-left">홍정민</span>
                    <span className="about-right"></span>
                  </Reveal>
                  <Reveal as="div" className="about-row">
                    <span className="about-left">2004.02.25</span>
                    <span className="about-right"></span>
                  </Reveal>
                </div>
              </Reveal>

              {/* Education */}
              <Reveal as="div" className="about-block">
                <h3 className="about-block-title">Education</h3>
                <div className="about-rows">
                  <Reveal as="div" className="about-row">
                    <span className="about-left">2026</span>
                    <span className="about-right">
                      계원예술대학교 디지털미디어디자인과
                      <br />
                      전문학사 졸업 예정
                    </span>
                  </Reveal>
                  <Reveal as="div" className="about-row">
                    <span className="about-left">2023</span>
                    <span className="about-right">동명여자고등학교 졸업</span>
                  </Reveal>
                </div>
              </Reveal>

              {/* Contact */}
              <Reveal as="div" className="about-block">
                <h3 className="about-block-title">Contact</h3>
                <div className="about-rows">
                  <Reveal as="div" className="about-row">
                    <span className="about-left">Phone.</span>
                    <span className="about-right">82+ 10 9430 8720</span>
                  </Reveal>
                  <Reveal as="div" className="about-row">
                    <span className="about-left">EMail.</span>
                    <span className="about-right">illxoyxx@naver.com</span>
                  </Reveal>
                  <Reveal as="div" className="about-row">
                    <span className="about-left">GitHub</span>
                    <span className="about-right">
                      <a
                        className="about-link"
                        href="https://github.com/JungMin225"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/JungMin225
                      </a>
                    </span>
                  </Reveal>
                </div>
              </Reveal>

            </RevealGroup>
          </Reveal>

          {/* ===== RIGHT COLUMN ===== */}
          <Reveal as="div" className="about-col">
            <RevealGroup stagger={0.12}>

              {/* Awards */}
              <Reveal as="div" className="about-block">
                <h3 className="about-block-title">Awards</h3>
                <div className="about-rows">
                  <Reveal as="div" className="about-row">
                    <span className="about-left">2025.07</span>
                    <span className="about-right">
                      31회 커뮤니케이션디자인 국제 공모전
                      <br />
                      디지털미디어디자인 부문 입선
                    </span>
                  </Reveal>
                </div>
              </Reveal>

              {/* Experience */}
              <Reveal as="div" className="about-block">
                <h3 className="about-block-title">Experience</h3>
                <div className="about-rows">
                  <Reveal as="div" className="about-row">
                    <span className="about-left">2024</span>
                    <span className="about-right">
                      우수작 대상 연합 PT
                      <br />
                      영상 기초 - ‘숙박 어플 에어비앤비 홍보 영상’
                    </span>
                  </Reveal>

                  <Reveal as="div" className="about-row">
                    <span className="about-left"></span>
                    <span className="about-right">
                      우수작 대상 연합 PT
                      <br />
                      3D 디자인 - ‘미래의 우주선 3D 모델링’
                    </span>
                  </Reveal>

                  <Reveal as="div" className="about-row">
                    <span className="about-left"></span>
                    <span className="about-right">
                      우수작 대상 연합 PT
                      <br />
                      모션 그래픽스 - ‘게임 유통사 Steam 홍보 영상’
                    </span>
                  </Reveal>

                  <Reveal as="div" className="about-row">
                    <span className="about-left"></span>
                    <span className="about-right">1학년 1학기 성적 우수 장학</span>
                  </Reveal>

                  <Reveal as="div" className="about-row">
                    <span className="about-left"></span>
                    <span className="about-right">1학년 1학기 부과대표</span>
                  </Reveal>

                  <Reveal as="div" className="about-row">
                    <span className="about-left"></span>
                    <span className="about-right">1학년 2학기 과대표</span>
                  </Reveal>
                </div>
              </Reveal>

            </RevealGroup>
          </Reveal>
        </RevealGroup>
        {/* end about-grid */}

      </div>
    </section>
  );
}

export default AboutSection;
