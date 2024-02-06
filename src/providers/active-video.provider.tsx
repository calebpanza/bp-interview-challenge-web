import { createContext, useContext, useState } from "react";

type ActiveVideoProviderProps = {
  children: React.ReactNode;
};

interface ActiveVideoContextValue {
  activeVideo: string | null;
  setActiveVideo: (videoId: string | null) => void;
}

const ActiveVideoContext = createContext<ActiveVideoContextValue>({
  activeVideo: null,
  setActiveVideo: () => null,
});

export const useActiveVideo = () => {
  const context = useContext(ActiveVideoContext);

  if (!context) {
    throw new Error("useActiveVideo must be used within a ActiveVideoProvider");
  }

  return context;
};

export function ActiveVideoProvider({ children }: ActiveVideoProviderProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <ActiveVideoContext.Provider value={{ activeVideo, setActiveVideo }}>
      {children}
    </ActiveVideoContext.Provider>
  );
}
