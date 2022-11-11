import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import '../App.css'

const Navbar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/bookstore/Categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="navber">
      <div className="nav__brand">
        <Link to="/" className="brand__link">BookStore CMS</Link>
      </div>
      <ul className="nav__menu">
        {Links.map((link) => (
          <li key={link.id} className="nav__item">
            <NavLink
              to={link.path}
              className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}
              end
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
