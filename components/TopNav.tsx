
import React from 'react';
import { MenuIcon, LogoIcon } from './Icons';

interface TopNavProps {
    onMenuClick: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onMenuClick }) => {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-gray-800 bg-gray-950/75 px-4 backdrop-blur-sm sm:px-6">
            <div className="flex items-center">
                <LogoIcon className="h-8 w-auto text-brand-cyan" />
                <h1 className="ml-3 text-lg font-bold text-white">Animation & UI/UX Guide</h1>
            </div>
            <button
                type="button"
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-cyan"
                onClick={onMenuClick}
            >
                <span className="sr-only">Open Menu</span>
                <MenuIcon className="h-6 w-6" />
            </button>
        </header>
    );
};
