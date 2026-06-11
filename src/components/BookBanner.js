import React, { useState, useEffect } from "react";
import "../styles/book-banner.css";

export default function BookBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="book-banner">
      <a
        href="https://github.com/AjayKumar0770"
        target="_blank"
        rel="noopener noreferrer"
      >
        Welcome to my MERN Stack Portfolio! 🚀
      </a>
    </div>
  );
}
