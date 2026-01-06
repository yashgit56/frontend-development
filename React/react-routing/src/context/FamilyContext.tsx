import React, { createContext, useState } from "react";
import Grandfather from "../components/Grandfather";

type FamilyContextProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const FamilyContextGroup = createContext<FamilyContextProps | null>(null);

function FamilyContext() {
  const [message, setMessage] = useState("");
  return (
    <FamilyContextGroup.Provider value={{ message, setMessage }}>
      <h1>Family Group</h1>
      <h3> Message can access any and change it: {message}</h3>
      <Grandfather />
    </FamilyContextGroup.Provider>
  );
}

export default FamilyContext;
