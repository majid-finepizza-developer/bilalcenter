import { companyInfo } from "../data/index";

/**
 * Strips non-numeric characters for valid WhatsApp API formatting.
 * Removes leading '+' as wa.me and api.whatsapp.com expect digits only (e.g., 1234567890).
 */
export const formatPhoneNumber = (phone?: string | null): string => {
  if (!phone) return "";
  return phone.replace(/\D/g, "");
};

/**
 * Detects if the current user agent is a mobile device (iOS/Android)
 */
export const isMobileBrowser = (): boolean => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

/**
 * Opens WhatsApp direct chat.
 * Opens app deep-link scheme on mobile devices; falls back to wa.me web URL on desktop.
 */
export const openWhatsApp = (message?: string | null): void => {
  // Direct fallback to companyInfo if phone number is null or undefined
  const targetNumber = formatPhoneNumber(companyInfo.WhatsAppNo);

  if (!targetNumber) {
    console.warn(
      "WhatsApp action failed: No valid phone number found in parameters or companyInfo.",
    );
    return;
  }

  const encodedMessage = encodeURIComponent(message || "");
  const textQuery = encodedMessage ? `?text=${encodedMessage}` : "";

  if (isMobileBrowser()) {
    // Standard app deep-link scheme for direct OS app handoff
    window.location.href = `whatsapp://send?phone=${targetNumber}${encodedMessage ? `&text=${encodedMessage}` : ""}`;
  } else {
    // Standard web URL for desktop browsers (WhatsApp Web / Desktop app landing)
    const whatsappUrl = `https://wa.me/${targetNumber}${textQuery}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }
};
