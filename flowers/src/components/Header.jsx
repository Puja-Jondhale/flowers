import React, { useState } from "react";
import "./Header.css";

const NAV_LINKS = [
  { name: "Collection", href: "#collection" },
  { name: "Shop", href: "#shop" },
  { name: "Material", href: "#material" },
  { name: "Categories", href: "#categories" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <img src="/images/flowers.jpg" alt="flower logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <button className="btn-search">Search</button>

          {/* Icons */}
          <div className="icon-group">
            <a href="#" aria-label="Cart">🛒</a>
            <a href="#" className="btn-login">Customer Login</a>
          </div>

          {/* 3 Dot Mobile Menu Button */}
          <div
            className="mobile-menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ⋮
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#">Customer Login</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;