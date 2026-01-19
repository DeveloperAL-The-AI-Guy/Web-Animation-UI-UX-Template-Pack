
import React from 'react';
import { SectionKey } from '../types';
import { ResearchMethods } from '../sections/ResearchMethods';
import { WhatsNew } from '../sections/WhatsNew';
import { AnimationTemplatePack } from '../sections/AnimationTemplatePack';
import { UIUXExcellenceKit } from '../sections/UIUXExcellenceKit';
import { DesignSystemStarter } from '../sections/DesignSystemStarter';
import { VibeKits } from '../sections/VibeKits';
import { ImplementationPlan } from '../sections/ImplementationPlan';
import { RiskRegister } from '../sections/RiskRegister';
import { SourceList } from '../sections/SourceList';
import { SECTIONS_DATA } from '../data/sections';

interface ContentDisplayProps {
    activeSection: SectionKey;
    onBackToHome: () => void;
}

const SECTION_COMPONENTS: { [key in SectionKey]?: React.ComponentType } = {
    researchMethods: ResearchMethods,
    whatsNew: WhatsNew,
    animationTemplatePack: AnimationTemplatePack,
    uiuxExcellenceKit: UIUXExcellenceKit,
    designSystemStarter: DesignSystemStarter,
    vibeKits: VibeKits,
    implementationPlan: ImplementationPlan,
    riskRegister: RiskRegister,
    sourceList: SourceList,
};

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ activeSection, onBackToHome }) => {
    const ActiveComponent = SECTION_COMPONENTS[activeSection];
    const sectionInfo = SECTIONS_DATA.find(s => s.id === activeSection);

    return (
        <div className="animate-fade-in">
            <button 
                onClick={onBackToHome}
                className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 hover:text-brand-cyan transition-colors"
            >
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
            </button>
            <h1 className="text-3xl font-semibold text-white tracking-tight sm:text-4xl">
                {sectionInfo?.title}
            </h1>
            <div className="mt-8 prose prose-invert max-w-none">
                {ActiveComponent ? <ActiveComponent /> : <p>Section not found.</p>}
            </div>
        </div>
    );
};
