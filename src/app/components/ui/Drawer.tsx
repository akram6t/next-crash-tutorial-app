'use client';

import { IconX } from '@tabler/icons-react';
import React, { useEffect } from 'react';

interface DrawerProps {
  visible: boolean;
  onVisible: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ visible, onVisible, onClose, children }) => {
  useEffect(() => {
    if (visible) {
      onVisible();
    }
  }, [visible, onVisible]);

  return (
    <>
      {/* Overlay */}
      {visible && (
        <div
          className="m-0 fixed w-screen h-screen inset-0 bg-black dark:bg-white bg-opacity-50 dark:bg-opacity-10 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`m-0 fixed top-0 left-0 h-full w-[70%] sm:w-80 bg-white dark:bg-dark shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute p-2 top-4 right-4 click-effect rounded-md"
          >
           <IconX/>
          </button>

          {/* Drawer content */}
          {children}

        </div>
      </div>
    </>
  );
};

export default Drawer;