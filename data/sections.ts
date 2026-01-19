
import { SectionData } from '../types';
import {
    SummaryIcon,
    ResearchIcon,
    SparklesIcon,
    TemplateIcon,
    UiUxIcon,
    DesignSystemIcon,
    VibeIcon,
    PlanIcon,
    RiskIcon,
    SourceIcon
} from '../components/Icons';

export const SECTIONS_DATA: SectionData[] = [
    { id: 'executiveSummary', title: 'Home', icon: SummaryIcon, description: "Start here. An overview of the key findings and the report's structure." },
    { id: 'researchMethods', title: 'Research Methods', icon: ResearchIcon, description: "How the data was collected, analyzed, and validated for this guide." },
    { id: 'whatsNew', title: 'What\'s New Right Now', icon: SparklesIcon, description: "A look at the cutting-edge APIs and techniques shaping the modern web." },
    { id: 'animationTemplatePack', title: 'Animation Templates', icon: TemplateIcon, description: "Production-ready, reusable animation snippets with code examples." },
    { id: 'uiuxExcellenceKit', title: 'UI/UX Excellence Kit', icon: UiUxIcon, description: "Best practices and inspirational examples from world-class websites." },
    { id: 'designSystemStarter', title: 'Design System Starter', icon: DesignSystemIcon, description: "A token-based starter kit for building a consistent design system." },
    { id: 'vibeKits', title: 'Vibe Kits', icon: VibeIcon, description: "Three distinct visual styles with token sets for rapid prototyping." },
    { id: 'implementationPlan', title: 'Implementation Plan', icon: PlanIcon, description: "A practical guide to implementing these concepts in a weekend project." },
    { id: 'riskRegister', title: 'Risk Register', icon: RiskIcon, description: "Common risks in modern web animation and how to mitigate them." },
    { id: 'sourceList', title: 'Source List', icon: SourceIcon, description: "A complete, cited list of all research sources used in this guide." },
];
