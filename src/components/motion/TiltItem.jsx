import React from "react";

const TiltItem = React.forwardRef(
  ({ src, alt = "", className = "", style, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={`tilt-item ${className}`}
        draggable={false}
        style={style}
        {...props}
      />
    );
  }
);

export default TiltItem;
