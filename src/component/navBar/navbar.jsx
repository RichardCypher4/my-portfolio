import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';
import '../navBar/navBar.scss';

const data = [
  { label: 'HOME', to: 'home' },
  { label: 'ABOUT ME', to: 'about' },
  { label: 'SKILLS', to: 'skills' },
  { label: 'CONTACT', to: 'contact' },
  { label: 'PORTFOLIO', to: 'portfolio' },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => setToggleIcon(!toggleIcon);

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <ScrollLink to="home" smooth={true} duration={500} className="navbar_container_logo">
          <FaReact size={90} />
        </ScrollLink>
        <ul className={`navbar_links ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                className="nav_container_menu_items_links"
                onClick={() => setToggleIcon(false)}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;