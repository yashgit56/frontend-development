import React, { useContext, useState } from "react";
import { FamilyContextGroup } from "../context/FamilyContext";
import FatherParent from "./FatherParent";

function Grandfather() {
  const context = useContext(FamilyContextGroup);

  if (context === null) {
    return;
  }

  return (
    <div>
      Grandfather Component Message : {context.message}
      <input
        type="text"
        value={context.message}
        onChange={(e) => context.setMessage(e.target.value)}
      />
      <FatherParent />
    </div>
  );
}

export default Grandfather;
