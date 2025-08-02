// src/components/CustomIcons.tsx
import React from "react";

export const WordPressIcon = ({ className }: { className?: string }) => (
  <img
    src="/ic--baseline-wordpress.svg"
    alt="WordPress"
    className={className || "w-5 h-5"}
  />
);
