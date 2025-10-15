import menuItemsTwo from '@/data/header-menu/menuItemTwo';
import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenus = () => {
  const [activeMenus, setActiveMenus] = useState<number[]>([]);
  const [submenuDisplay, setSubmenuDisplay] = useState<{[key: number]: boolean}>({});
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  

  const toggleMenu = (index: number) => {
    // Toggle submenu display
    setSubmenuDisplay(prev => ({
      ...prev,
      [index]: !prev[index]
    }));

    // Update active menus
    if (activeMenus.includes(index)) {
      setActiveMenus(activeMenus.filter(i => i !== index));
    } else {
      setActiveMenus([...activeMenus, index]);
    }
  };

  return (
    <ul>
      {menuItemsTwo.map((item, index) => (
        <li
          key={`menu-${index}`}
          className={`has-dropdown ${item.static ? 'p-static' : ''} ${
            activeMenus.includes(index) ? 'active' : ''
          } ${hoveredMenu === index || hoveredMenu === null ? 'is-active' : ''}`}
          onMouseEnter={() => setHoveredMenu(index)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <Link onClick={() => toggleMenu(index) } href={item.href} >
            {item.title}
          </Link>
          {item.subItems && (
            <>
              <ul 
                className="tp-submenu submenu" 
                style={{ display: submenuDisplay[index] ? 'block' : 'none' }}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <li key={`submenu-${index}-${subIndex}`}>
                    <Link href={subItem.href}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
              <button 
                className='tp-menu-close' 
                onClick={() => toggleMenu(index)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenus;