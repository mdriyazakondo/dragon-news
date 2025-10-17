import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZoon from "./QZoon";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin />
      <FindUs />
      <QZoon />
    </div>
  );
};

export default RightAside;
