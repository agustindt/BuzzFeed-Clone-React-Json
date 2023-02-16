import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Title;
