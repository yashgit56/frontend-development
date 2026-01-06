import React, { useContext } from "react";
import { FamilyContextGroup } from "../context/FamilyContext";

function Child() {
  const context = useContext(FamilyContextGroup);

  if (context === null) {
    return;
  }

  return (
    <div>
      Child Component Message : {context.message}
      <input
        type="text"
        value={context.message}
        onChange={(e) => context.setMessage(e.target.value)}
      />
    </div>
  );
}

export default Child;
