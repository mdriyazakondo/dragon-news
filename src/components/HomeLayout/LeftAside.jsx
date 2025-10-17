import React, { Suspense } from "react";
import Categores from "./Categores";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Categores />
      </Suspense>
    </div>
  );
};

export default LeftAside;
