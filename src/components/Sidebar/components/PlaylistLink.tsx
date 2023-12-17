interface IPlaylistLinkProps {
  name: string;
}

export function PlaylistLink({ name }: IPlaylistLinkProps) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
      {name}
    </a>
  );
}
