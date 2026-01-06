import React, { useContext } from "react";
import { FamilyContextGroup } from "../context/FamilyContext";
import Child from "./Child";

function FatherParent() {
  const context = useContext(FamilyContextGroup);

  if (context === null) {
    return;
  }

  return (
    <div>
      Father Component Message : {context.message}
      <input
        type="text"
        value={context.message}
        onChange={(e) => context.setMessage(e.target.value)}
      />
      <Child />
    </div>
  );
}

export default FatherParent;
