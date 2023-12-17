export function ProgressBar() {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-500">0:31</span>
        <div className="h-1 rounded-full w-96 bg-zinc-600">
          <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
        </div>
        <span className="text-xs text-zinc-500">2:14</span>
      </div>
    );
  }