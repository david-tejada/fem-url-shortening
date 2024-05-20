import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="m-4 mx-auto flex max-w-6xl items-center justify-between gap-12 px-4 md:justify-normal">
      <img src="/logo.svg" alt="" />
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-controls="navigation-menu"
        className="text-2xl text-gray-400 md:hidden"
      >
        <span className="sr-only">Menu</span>
        <img src="/icon-menu.svg" alt="" aria-hidden={true} />
      </button>
      <nav
        id="navigation-menu"
        className={`text-white fixed left-4 right-4 top-16 grow rounded-lg bg-violet-800 p-6 font-bold md:text-gray-400 ${isMenuOpen ? "block" : "hidden"} md:bg-transparent md:static md:block`}
      >
        <ul className="flex grow flex-col gap-8 text-center md:flex-row">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <hr className="text-gray-400 md:hidden" />
          <li className="md:ml-auto">
            <a href="#">Login</a>
          </li>
          <li className="grid md:block">
            <a href="#" className="text-white rounded-full bg-cyan px-6 py-2">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
