import Lottie from "lottie-react";
import loader from "../assets/loading-text.json";

import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="text-center">
        <Lottie className="h-screen" animationData={loader} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
