import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loaderContainer">
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="cardLoader"></div>
      ))}
    </div>
  );
};

export default Loader;
