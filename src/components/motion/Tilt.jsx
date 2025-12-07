import React, { useRef } from "react";

/**
 * 가벼운 3D tilt 컴포넌트
 * - maxTilt: 최대 회전 각도
 * - lift: 마우스 방향으로 살짝 이동되는 정도(px)
 * - scale: 살짝 커지는 느낌
 */
function Tilt({
  as: Tag = "img",
  className = "",
  maxTilt = 10,
  lift = 6,
  scale = 1.02,
  style,
  ...props
}) {
  const ref = useRef(null);
  const rafRef = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;  // 0 ~ width
    const y = e.clientY - rect.top;   // 0 ~ height

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // -1 ~ 1 범위
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;

    // 회전 각도
    const rotateY = dx * maxTilt;
    const rotateX = -dy * maxTilt;

    // 마우스 방향으로 살짝 이동
    const tx = dx * lift;
    const ty = dy * lift;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.transform =
        `perspective(700px) ` +
        `translate3d(${tx}px, ${ty}px, 0) ` +
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ` +
        `scale(${scale})`;
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    el.style.transform =
      "perspective(700px) translate3d(0,0,0) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      {...props}
    />
  );
}

export default Tilt;
