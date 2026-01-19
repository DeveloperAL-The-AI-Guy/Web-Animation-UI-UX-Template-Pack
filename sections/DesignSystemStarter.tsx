
import React from 'react';
import { Section, SectionTitle } from './Section';
import { CodeBlock } from '../components/CodeBlock';
import { designSystemStarterContent } from '../data/content';

export const DesignSystemStarter: React.FC = () => {
    return (
        <Section>
            <SectionTitle>Token-First Design System</SectionTitle>
            <p className="prose prose-invert max-w-none prose-p:text-gray-300">
                A design system starts with tokens: design decisions stored in variables. This ensures consistency and makes rebranding or theme updates trivial. Below is a starter set of CSS custom properties for a dark-themed tech vibe.
            </p>
            <CodeBlock code={designSystemStarterContent.tokens} language="css" />
        </Section>
    );
};
