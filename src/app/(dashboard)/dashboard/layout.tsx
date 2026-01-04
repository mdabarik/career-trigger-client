import React from "react";

const DashbaordLayout = ({ children }) => {
  return (
    <div>
      <div>Sidebar</div>
      <div>{children}</div>
    </div>
  );
};

export default DashbaordLayout;
