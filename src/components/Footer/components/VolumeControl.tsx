import { Volume, Maximize } from "lucide-react";

export function VolumeControl() {
  return (
    <div className="flex items-center gap-2">
      <Volume size={20} />
      <div className="h-1 rounded-full w-24 bg-zinc-600">
        <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
      </div>
      <Maximize size={20} />
    </div>
  );
}
