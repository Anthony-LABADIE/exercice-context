import React from "react";
import { NavLink } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import UserContext from "./contexts/UserContext";

export default function Header() {
  const { currentUserAvatar, currentUserName } = React.useContext(UserContext)
  return (
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/profile">
          <UserAvatar
            currentUserAvatar={currentUserAvatar}
            currentUserName={currentUserName}
          />
        </NavLink>
      </nav>
    </header>
  );
}
