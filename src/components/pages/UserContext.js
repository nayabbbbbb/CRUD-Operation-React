import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userArray, setUserArray] = useState([]);

  const addUser = (newUser) => {
    setUserArray([...userArray, newUser]);
  };

  const updateUser = (index, updatedUser) => {
    const updatedArray = [...userArray];
    updatedArray[index] = updatedUser;
    setUserArray(updatedArray);
  };

  const deleteUser = (index) => {
    const updatedArray = [...userArray];
    updatedArray.splice(index, 1);
    setUserArray(updatedArray);
  };

  const cloneUser = (index) => {
    const clonedRow = { ...userArray[index] };
    setUserArray([...userArray, clonedRow]);
  };

  return (
    <UserContext.Provider value={{ userArray, addUser, updateUser, deleteUser, cloneUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
