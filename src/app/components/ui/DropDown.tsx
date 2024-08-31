// components/DropdownMenu.tsx
'use client';

import { IconChevronDown } from '@tabler/icons-react';
import React, { useState, useRef, useEffect } from 'react';

interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ label, icon, ...props }) => {
  return (
    <button
      className="w-full flex gap-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out"
      role="menuitem"
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};

interface DropdownMenuProps {
  children?: React.ReactNode;
  label?: any;
  showIcon?: boolean;
  align?: 'left' | 'right';
}

const DropdownMenu: React.FC<DropdownMenuProps> & { Item: typeof MenuItem } = ({ 
  children, 
  label = "Options", 
  showIcon, 
  align = 'right',
  ...props 
}) => {
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

  const dropdownClasses = `origin-top-${align} absolute ${align}-0 mt-2 min-w-44 max-w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-gray-700 z-10`;

  return (
    <div {...props} className="z-30 relative inline-block text-left" ref={dropdownRef}>
      <div onClick={toggleDropdown} className="w-min cursor-pointer flex items-center">

        <div className="w-min text-white flex gap-x-1 hover:bg-white hover:bg-opacity-20 px-3 py-1 rounded-md text-sm font-medium">
          {label}
          {showIcon && <IconChevronDown className='ml-0' />}
        </div>
      </div>

      {isOpen && (
        <div className={dropdownClasses}>
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