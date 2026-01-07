import React, { useEffect, useRef } from 'react';
import Reveal from './motion/Reveal';
import RevealGroup from './motion/RevealGroup';

import symbol from '../assets/images/logo.png';
import azimuth from '../assets/images/azimuth.png';

function Hero() {
  const gridRef = useRef(null);

  useEffect(() => {
    // 그리드 설정값
    const config = {
      cols: 10, // 가로 칸 수
      rows: 10, // 세로 칸 수
    };

    const grid = gridRef.current;
    if (!grid) return;

    function buildGrid() {
      const { cols, rows } = config;
      const total = cols * rows;
      const cells = [];

      for (let i = 0; i < total; i++) {
        const grade = Math.floor(Math.random() * 12 - 6); // -6 ~ +5
        const opacity = Math.min(Math.random(), 0.2); // 0 ~ 0.2

        // 셀의 위치 (row, col) 계산
        const row = Math.floor(i / cols); // 0 ~ rows - 1
        const col = i % cols; // 0 ~ cols - 1

        // 바깥쪽 테두리인지 판별
        const isOuter =
          row === 0 || row === rows - 1 || col === 0 || col === cols - 1;

        // 색 결정: 바깥쪽 = B3F00D, 안쪽 = 263EF6
        const color = isOuter ? '#B3F00D' : '#263EF6';

        const div = document.createElement('div');
        div.textContent = '〉';
        div.style.setProperty('--grade', grade);
        div.style.setProperty('--opacity', opacity);
        div.style.setProperty('--color', color);

        cells.push(div);
      }

      // 기존 내용 비우고 새로 채우기
      grid.innerHTML = '';
      cells.forEach((c) => grid.appendChild(c));

      // CSS 그리드에 행/열 반영
      grid.style.setProperty('--cols', cols);
      grid.style.setProperty('--rows', rows);
    }

    buildGrid();
  }, []);

  return (
    <div className="hero-inner">
      {/* 왼쪽 텍스트 영역 */}
      <div className="hero-left">
        <Reveal as="div" className="hero-title-wrap" delay={0}>
          <h1 className="hero-title">SOUTH DIRECTION</h1>
          <div
            className="hero-symbol-circle"
            style={{ backgroundImage: `url(${symbol})` }}
          />
        </Reveal>

        <RevealGroup className="hero-intro" stagger={0.14} baseDelay={0.5}>
          <Reveal as="p">
            사용자 경험의 사각지대까지 밝히는
          </Reveal>

          <Reveal as="p">
            <span className="highlight-blue">프론트엔드 개발자</span> 홍정민
            <span className="highlight-blue">입니다.</span>
          </Reveal>
        </RevealGroup>

        <div className="hero-contact">
          <div className="contact-row">
            <span className="label">Phone</span>
            <span className="value">82+ 10 9430 8720</span>
          </div>
          <div className="contact-row">
            <span className="label">EMail</span>
            <span className="value">illxoyxx@naver.com</span>
          </div>
          <div className="contact-row">
            <span className="label">GitHub</span>
            <span className="value">https://github.com/JungMin225</span>
          </div>
        </div>
      </div>

      {/* 오른쪽: 심볼 + 그리드 */}
      <div
        className="hero-right"
        style={{ backgroundImage: `url(${azimuth})` }}
      >
        <div className="hero-symbol-wrapper"></div>

        <main className="hero-grid-main">
          {/* 여기 ref로 그리드를 연결 */}
          <div className="grid" ref={gridRef}></div>
        </main>
      </div>
    </div>
  );
}

export default Hero;
