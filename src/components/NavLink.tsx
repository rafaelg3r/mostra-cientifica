import Link from "next/link";

type NavLinkProps = {
  href: string;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const NavLink = ({ href, isActive, onClick, children }: NavLinkProps) => {
  const activeClass = isActive
    ? "bg-[#404249] text-white shadow-sm"
    : "text-white/60 hover:bg-white/5 hover:text-white/80";
  const defaultClass =
    "flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-colors";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${defaultClass} ${activeClass}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
