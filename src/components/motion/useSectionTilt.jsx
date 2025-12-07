import { useEffect, useRef } from "react";

export default function useSectionTilt(sectionRef, items = []) {
  const rafRef = useRef(0);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl || items.length === 0) return;

    const apply = (dx, dy) => {
      items.forEach((item) => {
        const el = item.ref?.current;
        if (!el) return;

        const maxTilt = item.maxTilt ?? 10;
        const lift = item.lift ?? 8;
        const scale = item.scale ?? 1.02;

        const rotateY = dx * maxTilt;
        const rotateX = -dy * maxTilt;
        const tx = dx * lift;
        const ty = dy * lift;

        el.style.transform =
          `perspective(700px) ` +
          `translate3d(${tx}px, ${ty}px, 0) ` +
          `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ` +
          `scale(${scale})`;
      });
    };

    const reset = () => {
      items.forEach((item) => {
        const el = item.ref?.current;
        if (!el) return;

        el.style.transform =
          "perspective(700px) translate3d(0,0,0) rotateX(0deg) rotateY(0deg) scale(1)";
      });
    };

    const handleMove = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const dx = (x - cx) / cx; // -1 ~ 1
      const dy = (y - cy) / cy; // -1 ~ 1

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => apply(dx, dy));
    };

    const handleLeave = () => {
      cancelAnimationFrame(rafRef.current);
      reset();
    };

    sectionEl.addEventListener("mousemove", handleMove);
    sectionEl.addEventListener("mouseleave", handleLeave);

    return () => {
      sectionEl.removeEventListener("mousemove", handleMove);
      sectionEl.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [sectionRef, items]);
}
