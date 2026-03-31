"use client";

import React, { createContext, useContext } from "react";

type LinkifyContextType = {
  linkify: (text: string) => React.ReactNode[];
};

const LinkifyContext = createContext<LinkifyContextType | null>(null);

const urlRegex = /(https?:\/\/[^\s]+)/g;

export const LinkifyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const linkify = (text: string) => {
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {part}
          </a>
        );
      }

      return part;
    });
  };

  return (
    <LinkifyContext.Provider value={{ linkify }}>
      {children}
    </LinkifyContext.Provider>
  );
};

export const useLinkify = () => {
  const context = useContext(LinkifyContext);
  if (!context) {
    throw new Error("useLinkify must be used within LinkifyProvider");
  }
  return context;
};
