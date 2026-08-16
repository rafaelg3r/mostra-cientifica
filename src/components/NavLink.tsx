type NavLinkProps = {
  isActive?: boolean;
  children: React.ReactNode;
};

const NavLink = ({ children, isActive }: NavLinkProps) => {
  const activeClass = isActive
    ? "bg-marine-600/20 text-marine-600"
    : "text-white/60 hover:bg-marine-600/10 hover:text-marine-600/60";
  const defaultClass =
    "flex items-center gap-3 text-sm p-2.5 cursor-pointer rounded-md";

  return (
    <div className="">
      <div className={`${defaultClass} ${activeClass}`}>{children}</div>
    </div>
  );
};

export default NavLink;
