import React from "react";
import { FaWhatsapp } from "../../data/icons";
import { openWhatsApp } from "../../utils/whatsapp";

export interface WhatsAppButtonProps {
  message?: string | null;
  label?: string;
  className?: string;
  iconSize?: number;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = null,
  label,
  className = "",
  iconSize,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openWhatsApp(message);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={className}
    >
      {iconSize && <FaWhatsapp size={iconSize} />}
      {label && <span>{label}</span>}
    </button>
  );
};

export default WhatsAppButton;
