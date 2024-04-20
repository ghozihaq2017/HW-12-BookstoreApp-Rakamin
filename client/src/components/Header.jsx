import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidBookBookmark } from 'react-icons/bi';

function Header() {
  return (
    <header className="drop-shadow-xl fixed z-10 w-full">
      <div className="top-header bg-lightblue h-4"></div>
      <div className="navbar bg-white">
        <Link to="/" className="btn btn-ghost text-xl xl:ml-40 font-ysv text-darkblue">
          <BiSolidBookBookmark />
          Novelnest
        </Link>
      </div>
    </header>
  );
}

export default Header;
