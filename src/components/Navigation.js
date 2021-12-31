import { data } from "../data";
import { useState } from "react";

export default function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="order-last md:order-none ">
      <ul
        className={
          "md:flex " +
          (navbarOpen
            ? "block absolute left-0 right-0 top-12 sm:top-16 shadow-2xl rounded text-center space-y-1.5 py-5 border-2 bg-white"
            : "hidden")
        }
      >
        {data.header.navLinks.map((link) => (
          <li
            key={link.text}
            className={
              navbarOpen
                ? "text-gray-800"
                : "text-grayish-blue mx-1 hover:text-gray-700 border-b-4 border-white hover:border-lime-green"
            }
          >
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>

      {/* menu icon */}
      <button className="md:hidden " onClick={() => setNavbarOpen(!navbarOpen)}>
        <img
          src={
            navbarOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"
          }
          alt="menu icon"
          className="w-5 h-4"
        />
      </button>
    </nav>
  );
}
