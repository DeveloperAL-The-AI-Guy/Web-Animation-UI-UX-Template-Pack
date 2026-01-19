
import React from 'react';
import { Section, SectionTitle } from './Section';
import { riskRegisterContent, sources } from '../data/content';

export const RiskRegister: React.FC = () => {
    return (
        <Section>
            <SectionTitle>Potential Risks & Mitigations</SectionTitle>
            <div className="space-y-4">
                {riskRegisterContent.risks.map((item, index) => (
                    <div key={index} className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                        <h3 className="font-semibold text-brand-cyan">{item.risk}</h3>
                        <p className="mt-1 text-gray-300 text-sm">
                            <strong>Mitigation:</strong> {item.mitigation}
                            {item.citation && (
                                <a href={sources.find(s => s.id === item.citation)?.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-brand-blue hover:underline">
                                    [{item.citation}]
                                </a>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
