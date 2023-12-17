import { Mic2, LayoutList, Laptop2 } from "lucide-react";
import Image from "next/image";
import { MusicControls } from "./components/MusicControls";
import { ProgressBar } from "./components/ProgressBar";
import { VolumeControl } from "./components/VolumeControl";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/album.jpg"
          width={56}
          height={56}
          alt={"Capa da música 'Yessir (Phonk Remix)' do cantor Rarin"}
        />
        <div className="flex flex-col">
          <strong className="font-normal">YESSIR - Phonk Remix</strong>
          <span className="text-xs text-zinc-500">
            Rarin, Maikubi, LXRY PXNK
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <MusicControls />
        <ProgressBar />
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <VolumeControl />
      </div>
    </footer>
  );
}
