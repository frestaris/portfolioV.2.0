import { useState, useEffect } from "react";
import { initAnalytics } from "../utils/analytics";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "true") {
      initAnalytics(GA_ID); // auto-init if previously accepted
    } else {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    if (GA_ID) initAnalytics(GA_ID); // skip if undefined
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
      <p className="text-sm mb-2 md:mb-0">
        This website uses cookies to improve your experience and track usage
        with Google Analytics.
      </p>
      <div className="flex gap-2">
        <button
          onClick={acceptCookies}
          className="bg-[#4ec9b0] text-black px-4 py-2 rounded hover:bg-[#3ba790] transition hover:cursor-pointer"
        >
          Accept
        </button>
        <button
          onClick={() => {
            localStorage.setItem("cookie-consent", "false");
            setVisible(false);
          }}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition hover:cursor-pointer"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
