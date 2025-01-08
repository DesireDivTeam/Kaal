import React from "react";

export default function Wrapper({ children, className = "" }) {
  return (
    <div
      className={`md:max-w-screen-2xl mx-auto py-16 lg::px-0 px-5 ${className} `}
    >
      {children}
    </div>
  );
}
