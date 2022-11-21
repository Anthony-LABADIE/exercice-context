import React from "react";
import UserContext from "./contexts/UserContext";

export default function Footer() {
    const { currentUserName } = React.useContext(UserContext)
  return <footer>Glad to see you back {currentUserName}</footer>;
}
