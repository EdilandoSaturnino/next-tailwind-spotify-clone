import Image from "next/image";

interface ISmallMusicCardProps {
    src: string;
    title: string;
    description: string;
  }

export function SmallMusicCard({ src, title, description } : ISmallMusicCardProps) {
  return (
    <a
      href=""
      className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors flex flex-col gap-2"
    >
      <Image
        src={src}
        width={104}
        height={104}
        alt={title}
        className="w-full"
      />
      <strong className="font-semibold">{title}</strong>
      <span className="text-xs text-zinc-400">{description}</span>
    </a>
  );
}
