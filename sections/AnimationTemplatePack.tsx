
import React from 'react';
import { Section } from './Section';
import { animationTemplates } from '../data/content';
import { AnimationTemplateCard } from '../components/AnimationTemplateCard';

export const AnimationTemplatePack: React.FC = () => {
    return (
        <Section>
            <div className="space-y-12">
                {animationTemplates.map((template, index) => (
                    <AnimationTemplateCard key={index} template={template} />
                ))}
            </div>
        </Section>
    );
};
