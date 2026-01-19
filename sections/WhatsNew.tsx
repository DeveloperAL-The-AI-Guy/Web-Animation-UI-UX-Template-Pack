
import React from 'react';
import { Section } from './Section';
import { whatsNewContent, sources } from '../data/content';

export const WhatsNew: React.FC = () => {
    return (
        <Section>
            <div className="space-y-8">
                {whatsNewContent.technologies.map((tech, index) => (
                    <div key={index} className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-semibold text-brand-cyan">{tech.name}</h3>
                        <p className="mt-2 text-gray-300">{tech.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-400">Status: {tech.status}</span>
                            <div className="text-sm text-gray-400">
                                Sources: {tech.citations.map((id, i) => (
                                    <a key={i} href={sources.find(s => s.id === id)?.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-brand-blue hover:underline">
                                        [{id}]
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
