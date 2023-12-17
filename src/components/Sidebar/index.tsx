import { Home as HomeIcon, Search, Library } from "lucide-react";
import { NavLink } from "./components/NavLink";
import { PlaylistLink } from "./components/PlaylistLink";

export function Sidebar() {
  const playlists = [
    "Playlist #1",
    "Playlist #2",
    "Playlist #3",
    "Playlist #4",
    "Playlist #5",
    "Playlist #6",
    "Playlist #7",
    "Playlist #8",
    "Playlist #9",
  ];

  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <NavLink href="" icon={<HomeIcon />}>
          Home
        </NavLink>
        <NavLink href="" icon={<Search />}>
          Search
        </NavLink>
        <NavLink href="" icon={<Library />}>
          Your Library
        </NavLink>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        {playlists.map((playlist, index) => (
          <PlaylistLink key={index} name={playlist} />
        ))}
      </nav>
    </aside>
  );
}
