'use client';

import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useEffect, useState } from 'react';

interface ThemeSwitchProps {
    noIconThemeChange?: boolean
}

export default function ThemeSwitcher({ noIconThemeChange }: ThemeSwitchProps) {
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
        <button onClick={toggleTheme} className={`p-2 ${noIconThemeChange ? 'text-indigo-50' : 'text-indigo-800 dark:text-indigo-50'} rounded-full`}>
            {currentTheme === 'dark' ? <IconSun /> : <IconMoon />}
        </button>

    )
}