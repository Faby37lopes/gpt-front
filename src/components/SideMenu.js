import React from "react";
import "./SideMenu.css";

export const SideMenu = ({onNovoChat}) => {
  return (
    <aside className="sidemenu">
      <div className="sidemenu-buttons" onClick={onNovoChat}>
        <span>+</span>
        Novo Chat
      </div>
    </aside>
  );
};
