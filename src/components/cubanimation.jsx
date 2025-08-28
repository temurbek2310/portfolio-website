import React from "react";

const Cubanimation = () => {
  return (
    <div className="cube__container">
      <div className="fixed cub-grid top-0  -z-0">
        {Array.from({ length: 1000 }, (_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </div>
  );
};

export default Cubanimation;
