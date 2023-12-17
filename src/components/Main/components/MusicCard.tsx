import { Play } from "lucide-react";
import Image from "next/image";

interface IMusicCardProps {
  src: string;
  title: string;
  description: string;
}

export function MusicCard({ src, title, description }: IMusicCardProps) {
  return (
    <a
      href=""
      className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
    >
      <Image src={src} width={104} height={104} alt={title} />
      <div className="flex flex-col">
        <strong className="font-semibold">{title}</strong>
        <span className="text-sm text-zinc-400">{description}</span>
      </div>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
