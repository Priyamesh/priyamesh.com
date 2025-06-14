import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  // { name: "Uses", href: "/uses" },
];

export default function Navbar() {
  return (
    <header className="flex w-full max-w-3xl mx-auto px-4 my-10">
      <NavLink to="/">
        <img
          src="https://avatars.githubusercontent.com/u/47794863?v=4"
          alt="Priyamesh's avatar"
          width={100}
          height={100}
          className="rounded-full w-12 h-12"
        />
      </NavLink>
      <nav className="flex flex-1 justify-center items-center h-12" id="nav">
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="cursor-pointer text-base">
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive ? "text-orange-700 font-semibold" : "text-black"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
