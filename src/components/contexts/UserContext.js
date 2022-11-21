import React from "react";
import { createContext } from 'react';
import { useState } from 'react'

const UserContext = createContext();

export default UserContext;

export const CurrentUserContextProvider = ({ children }) => {

  const [currentUserName, setCurrentUserName] = useState('')
  const [currentUserAvatar, setCurrentUserAvatar] = useState('')

  return (
    <UserContext.Provider
      value={{
        currentUserName,
        setCurrentUserName,
        currentUserAvatar,
        setCurrentUserAvatar,
      }}>
          {children}
    </UserContext.Provider>
    );
};

