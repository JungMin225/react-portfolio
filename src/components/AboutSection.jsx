import React from "react";

function AboutSection() {
  return (
    <section
      id="contact" // ✅ 기존 헤더 연결 유지
      className="section section-about"
      aria-labelledby="about-title"
    >
      <div className="about-inner">
        {/* 큰 타이틀 */}
        <h2 id="about-title" className="about-title">
          ABOUT
        </h2>

        {/* 2열 콘텐츠 */}
        <div className="about-grid">
          {/* ===== LEFT COLUMN ===== */}
          <div className="about-col">
            {/* Profile */}
            <div className="about-block">
              <h3 className="about-block-title">Profile</h3>
              <div className="about-rows">
                <div className="about-row">
                  <span className="about-left">홍정민</span>
                  <span className="about-right"></span>
                </div>
                <div className="about-row">
                  <span className="about-left">2004.02.25</span>
                  <span className="about-right"></span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="about-block">
              <h3 className="about-block-title">Education</h3>
              <div className="about-rows">
                <div className="about-row">
                  <span className="about-left">2026</span>
                  <span className="about-right">
                    계원예술대학교 디지털미디어디자인과
                    <br />
                    전문학사 졸업 예정
                  </span>
                </div>
                <div className="about-row">
                  <span className="about-left">2023</span>
                  <span className="about-right">동명여자고등학교 졸업</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="about-block">
              <h3 className="about-block-title">Contact</h3>
              <div className="about-rows">
                <div className="about-row">
                  <span className="about-left">Phone.</span>
                  <span className="about-right">82+ 10 0000 0000</span>
                </div>
                <div className="about-row">
                  <span className="about-left">EMail.</span>
                  <span className="about-right">000@naver.com</span>
                </div>
                <div className="about-row">
                  <span className="about-left">GitHub</span>
                  <span className="about-right">
                    <a
                      className="about-link"
                      href="https://github.com/JungMin225"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="about-col">
            {/* Awards */}
            <div className="about-block">
              <h3 className="about-block-title">Awards</h3>
              <div className="about-rows">
                <div className="about-row">
                  <span className="about-left">2025.07</span>
                  <span className="about-right">
                    31회 커뮤니케이션디자인 국제 공모전
                    <br />
                    디지털미디어디자인 부문 입선
                  </span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="about-block">
              <h3 className="about-block-title">Experience</h3>
              <div className="about-rows">
                <div className="about-row">
                  <span className="about-left">2024</span>
                  <span className="about-right">
                    우수작 대상 연합 PT
                    <br />
                    영상 기초 - ‘숙박 어플 에어비앤비 홍보 영상’
                  </span>
                </div>

                <div className="about-row">
                  <span className="about-left"></span>
                  <span className="about-right">
                    우수작 대상 연합 PT
                    <br />
                    3D 디자인 - ‘미래의 우주선 3D 모델링’
                  </span>
                </div>

                <div className="about-row">
                  <span className="about-left"></span>
                  <span className="about-right">
                    우수작 대상 연합 PT
                    <br />
                    모션 그래픽스 - ‘게임 유통사 Steam 홍보 영상’
                  </span>
                </div>

                <div className="about-row">
                  <span className="about-left"></span>
                  <span className="about-right">1학년 1학기 성적 우수 장학</span>
                </div>

                <div className="about-row">
                  <span className="about-left"></span>
                  <span className="about-right">1학년 1학기 부과대표</span>
                </div>

                <div className="about-row">
                  <span className="about-left"></span>
                  <span className="about-right">1학년 2학기 과대표</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end about-grid */}
      </div>
    </section>
  );
}

export default AboutSection;
