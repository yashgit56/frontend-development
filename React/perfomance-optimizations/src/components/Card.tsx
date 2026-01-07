import "./card.css";

import React, { useRef } from "react";
import CopyToClipboard from "../hooks/CopyToClipboard";
import "./card.css";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { copyText, status } = CopyToClipboard(1500);

  const handleCopy = () => {
    if (cardRef.current) {
      copyText(cardRef.current.innerText); // copy entire card text
    }
  };

  return (
    <div className="card" ref={cardRef}>
      <button className="copy-btn" onClick={handleCopy}>
        {status === "success" ? "Copied!" : "Copy"}
      </button>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
