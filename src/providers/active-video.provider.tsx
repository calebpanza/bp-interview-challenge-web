import { createContext, useContext, useState } from "react";

const ActiveVideoContext = createContext();

export const useActiveVideo = () => {
  const context = useContext(ActiveVideoContext);

  if (!context) {
    throw new Error("useActiveVideo must be used within a ActiveVideoProvider");
  }

  return context;
};

export function ActiveVideoProvider({ children }) {
  const [activeVideo, setActiveVideo] = useState();

  return (
    <ActiveVideoContext.Provider value={{ activeVideo, setActiveVideo }}>
      {children}
    </ActiveVideoContext.Provider>
  );
}
