
import React from 'react';
import { SectionKey, SectionData } from '../types';
import { SECTIONS_DATA } from '../data/sections';
import { LogoIcon } from './Icons';

interface SidebarProps {
    activeSection: SectionKey;
    setActiveSection: (section: SectionKey) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
    return (
        <div className="flex flex-grow flex-col overflow-y-auto bg-gray-900 pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
                <LogoIcon className="h-8 w-auto text-brand-cyan" />
                <h1 className="ml-3 text-lg font-bold text-white">Sections</h1>
            </div>
            <div className="mt-5 flex-1 flex flex-col">
                <nav className="flex-1 space-y-1 px-2 pb-4">
                    {SECTIONS_DATA.map((section: SectionData) => (
                        <a
                            key={section.id}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveSection(section.id);
                            }}
                            className={`
                                ${activeSection === section.id
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                }
                                group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150
                            `}
                        >
                            <section.icon
                                className={`
                                    ${activeSection === section.id ? 'text-brand-cyan' : 'text-gray-500 group-hover:text-gray-300'}
                                    mr-3 flex-shrink-0 h-6 w-6 transition-colors duration-150
                                `}
                            />
                            {section.title}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};
