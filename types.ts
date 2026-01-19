
export interface SectionData {
    id: SectionKey;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
}

export interface AnimationTemplate {
    name: string;
    useCases: string;
    howItWorks: string;
    example: {
        html: string;
        css: string;
        js: string;
    };
    accessibilityNotes: string;
    performanceNotes: string;
    mobileNotes: string;
    fallbackStrategy: string;
    inspirations: number[]; // Array of source IDs
}

export interface Source {
    id: number;
    title: string;
    author: string;
    url: string;
    publication: string;
    date: string;
}

export interface VibeKit {
    name: string;
    description: string;
    palette: { name: string; hex: string; }[];
    typography: string;
    motion: string;
    heroExample: {
        html: string;
        css: string;
    },
    featureExample: {
        html: string;
        css: string;
    }
}

// This defines the keys for all sections, used for state management and data lookup.
export type SectionKey = 
    | 'executiveSummary'
    | 'researchMethods'
    | 'whatsNew'
    | 'animationTemplatePack'
    | 'uiuxExcellenceKit'
    | 'designSystemStarter'
    | 'vibeKits'
    | 'implementationPlan'
    | 'riskRegister'
    | 'sourceList';