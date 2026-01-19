
import React from 'react';
import { Section, SectionTitle, SubSection } from './Section';
import { uiuxExcellenceKitContent, sources } from '../data/content';

export const UIUXExcellenceKit: React.FC = () => {
    return (
        <Section>
            <SectionTitle>Reference Experiences</SectionTitle>
            <div className="space-y-4">
                {uiuxExcellenceKitContent.references.map((ref, index) => (
                    <div key={index} className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                        <h3 className="font-semibold text-brand-cyan">
                            {ref.name}
                            <a href={sources.find(s => s.id === ref.citation)?.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-brand-blue hover:underline">
                                [visit]
                            </a>
                        </h3>
                        <p className="mt-1 text-gray-300 text-sm">{ref.reason}</p>
                    </div>
                ))}
            </div>

            <SectionTitle>Interaction Principles</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {uiuxExcellenceKitContent.principles.map((principle, index) => (
                    <SubSection key={index} title={principle.name}>
                        <p>{principle.detail}</p>
                    </SubSection>
                ))}
            </div>
        </Section>
    );
};
