import React from "react";

function RevealGroup({
  children,
  className = "",
  stagger = 0.14,
  baseDelay = 0, // ✅ 그룹 시작 지연
}) {
  const items = React.Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, index) => {
        if (!React.isValidElement(child)) return child;

        // ✅ 기존 child delay가 있으면 유지 + 그룹 딜레이 반영
        const childDelay = child.props.delay ?? 0;
        const nextDelay = baseDelay + index * stagger + childDelay;

        return React.cloneElement(child, {
          delay: nextDelay,
        });
      })}
    </div>
  );
}

export default RevealGroup;
