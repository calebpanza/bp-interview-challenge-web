import { BibleProject } from "../icons/BibleProject";

export function Loader({ ready }) {
  return (
    <div className={`loader ${ready ? "finished" : "idle"}`}>
      <BibleProject size={150} />
    </div>
  );
}
