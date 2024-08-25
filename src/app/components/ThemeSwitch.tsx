'use client';

import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // or a placeholder
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const toggleTheme = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button onClick={toggleTheme} className='p-2 text-gray-800 dark:text-slate-50 rounded-full'>
            {currentTheme === 'dark' ? <IconSun /> : <IconMoon />}
        </button>
    )
}