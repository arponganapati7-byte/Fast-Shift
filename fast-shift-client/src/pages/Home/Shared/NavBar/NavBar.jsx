import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import FastShiftLogo from "../FastShiftLogo/FastShiftLogo";

const NavBar = () => {
  const { user, logOutUser } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOutUser().catch((err) => console.error(err));
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo */}
      <div>
        <FastShiftLogo />
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6">
        <NavLink
          to="/"
          className="text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
        >
          About
        </NavLink>

        <NavLink
          to="/coverage"
          className="text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
        >
          Coverage
        </NavLink>

        <NavLink
          to="/rider"
          className="text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
        >
          Be a Rider
        </NavLink>

        {/* Dashboard */}
        {user && (
          <NavLink
            to="/dashboard"
            className="text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
          >
            Dashboard
          </NavLink>
        )}

        {/* User / Login */}
        {user ? (
          <div className="flex items-center gap-4 relative group">
            <img
              src={
                user.photoURL ||
                "https://i.ibb.co/4pDNDk1/avatar.png"
              }
              alt="User"
              className="w-9 h-9 rounded-full border cursor-pointer"
            />

            {/* Hover User Name */}
            <span className="absolute top-full mt-2 left-0 bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-all z-10">
              {user.displayName || "User"}
            </span>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 bg-primary text-black rounded-full text-sm hover:opacity-90 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="px-6 py-2 bg-primary hover:opacity-90 transition text-black rounded-full"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
        >
          <rect
            width="21"
            height="1.5"
            rx=".75"
            fill="#426287"
          />

          <rect
            x="8"
            y="6"
            width="13"
            height="1.5"
            rx=".75"
            fill="#426287"
          />

          <rect
            x="6"
            y="13"
            width="15"
            height="1.5"
            rx=".75"
            fill="#426287"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-3 px-5 text-sm md:hidden z-50`}
      >
        <NavLink
          to="/"
          className="block w-full text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="block w-full text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
        >
          About
        </NavLink>

        <NavLink
          to="/coverage"
          className="block w-full text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
        >
          Coverage
        </NavLink>

        <NavLink
          to="/rider"
          className="block w-full text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
        >
          Be a Rider
        </NavLink>

        {user ? (
          <div className="flex items-center gap-3 mt-2 relative group w-full">
            <img
              src={
                user.photoURL ||
                "https://i.ibb.co/4pDNDk1/avatar.png"
              }
              alt="User"
              className="w-9 h-9 rounded-full border cursor-pointer"
            />

            <span className="text-gray-700 text-sm group-hover:underline">
              {user.displayName || "User"}
            </span>

            <button
              onClick={handleLogout}
              className="ml-auto px-4 py-1 bg-primary text-white rounded-full text-sm hover:opacity-90 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="px-6 py-2 mt-2 bg-primary hover:opacity-90 transition text-white rounded-full text-sm"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;