
import React from 'react';
import { Section } from './Section';
import { vibeKits } from '../data/content';
import { VibeKitCard } from '../components/VibeKitCard';

export const VibeKits: React.FC = () => {
    return (
        <Section>
             <p className="prose prose-invert max-w-none prose-p:text-gray-300 mb-8">
                The following "Vibe Kits" are starting points for creating a distinct aesthetic. Each includes token suggestions for color, typography, and motion, along with simple component examples.
            </p>
            <div className="space-y-12">
                {vibeKits.map((kit, index) => (
                    <VibeKitCard key={index} kit={kit} />
                ))}
            </div>
        </Section>
    );
};
