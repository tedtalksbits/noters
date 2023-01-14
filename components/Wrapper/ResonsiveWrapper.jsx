import React from "react";
import WrapperStyles from "./ResponsiveWrapper.module.css";
const ResonsiveWrapper = ({ children }) => {
  return <main className={WrapperStyles.wrapper}>{children}</main>;
};

export default ResonsiveWrapper;
