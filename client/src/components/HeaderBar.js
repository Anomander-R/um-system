import React from "react";
import HeaderLogo from "./HeaderLogo";
import CommandButton from "./CommandButton";

const HeaderBar = () => {
  return (
    <div
      className="header section-header-offset"
      id="header"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <HeaderLogo />
        <div>User Management System</div>
      </div>

      <div style={{marginRight: '50px', marginLeft: '50px'}}><CommandButton name={"fa fa-plus"} />  Add user</div>
    </div>
  );
};

export default HeaderBar;
