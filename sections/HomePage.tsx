
import React from 'react';
import { Section } from './Section';
import { SECTIONS_DATA } from '../data/sections';
import { SectionKey } from '../types';

interface HomePageProps {
    setActiveSection: (section: SectionKey) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveSection }) => {
    const navSections = SECTIONS_DATA.filter(s => s.id !== 'executiveSummary');

    return (
        <Section>
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    The Modern Web Animation & UI/UX Guide
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                    An interactive guide based on extensive research into modern web animation, UI/UX patterns, and performance best practices.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {navSections.map(section => (
                    <div
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-cyan/20"
                    >
                        <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-brand-cyan/10 transition-transform duration-500 group-hover:scale-[15]"></div>
                        <div className="relative z-10">
                            <section.icon className="h-8 w-8 text-brand-cyan" />
                            <h3 className="mt-4 text-lg font-semibold text-white">
                                {section.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                {section.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
