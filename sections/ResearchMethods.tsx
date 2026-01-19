
import React from 'react';
import { Section, SubSection } from './Section';
import { researchMethodsContent } from '../data/content';

export const ResearchMethods: React.FC = () => {
    return (
        <Section>
            <div className="prose prose-invert max-w-none prose-p:text-gray-300">
                <p>{researchMethodsContent.description}</p>
            </div>
            {researchMethodsContent.steps.map((step, index) => (
                <SubSection key={index} title={step.name}>
                    <p>{step.detail}</p>
                </SubSection>
            ))}
        </Section>
    );
};
