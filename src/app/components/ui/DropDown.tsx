// components/DropdownMenu.tsx
'use client';

import { IconArrowDown, IconArrowDownFromArc, IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  return (
    <Link 
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out"
      role="menuitem"
    >
      {label}
    </Link>
  );
};

interface DropdownMenuProps {
  children?: React.ReactNode;
  label?: any;
  showIcon?: boolean;
};

const DropdownMenu: React.FC<DropdownMenuProps> & { Item: typeof MenuItem } = ({ children, label = "Options", showIcon, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div {...props} className="z-30 relative inline-block text-left" ref={dropdownRef}>
        <div onClick={toggleDropdown} className="w-min cursor-pointer flex">
            {label}
            {
              showIcon && <IconChevronDown className='ml-2'/>

            }
        </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-gray-700 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

DropdownMenu.Item = MenuItem;

export default DropdownMenu;