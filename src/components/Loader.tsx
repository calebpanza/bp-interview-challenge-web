import { useEffect, useState } from "react";
import { BibleProject } from "../icons/BibleProject";

interface LoaderProps {
  ready: boolean;
}

export function Loader({ ready }: LoaderProps) {
  const [_dismount, _setDismount] = useState(false);

  useEffect(
    function dismountAfterReady() {
      if (!ready) return () => null;

      const timeout = setTimeout(() => {
        _setDismount(true);
      }, 1000);

      return () => clearTimeout(timeout);
    },
    [ready]
  );

  if (_dismount) return null;

  return (
    <div className={`loader ${ready ? "finished" : "idle"}`}>
      <BibleProject size={150} />
    </div>
  );
}

Loader.defaultProps = {
  ready: false,
};
