import React from "react";

const Fatal = ({ error }) => {
  return (
    <div className="flex-center">
      <img
        src="https://image.freepik.com/vector-gratis/ilustracion-concepto-uy-error-404-robot-roto_114360-1881.jpg"
        alt="error"
        className="error"
      />
      <h1>{error}</h1>
    </div>
  );
};

export default Fatal;
