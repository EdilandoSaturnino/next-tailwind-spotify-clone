import { LucideProps } from "lucide-react";

interface INavLinkProps {
  href: string;
  icon: React.ReactElement<LucideProps>;
  children: React.ReactNode;
}

export function NavLink({ href, icon, children }: INavLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100 transition-colors"
    >
      {icon} {children}
    </a>
  );
}