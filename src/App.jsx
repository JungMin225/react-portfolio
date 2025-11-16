import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';

function App() {
  const [dDay, setDDay] = useState(0);

  useEffect(() => {
    // 목표 날짜를 설정하세요 (예: 2026년 2월 20일)
    const targetDate = new Date("2026-02-03");
    const today = new Date();

    const differenceInTime = targetDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    setDDay(differenceInDays);
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  return (
    <>
    <h2>졸업까지... D-{dDay}</h2>
      <nav>
        <Link to="/page1">이력</Link> | {" "}
        <Link to="/page2">포트폴리오</Link> | {" "}
        <Link to="/page3">자기소개</Link>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </>
  )
}

export default App
