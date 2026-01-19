
import React from 'react';
import { Section } from './Section';
import { executiveSummaryContent } from '../data/content';

export const ExecutiveSummary: React.FC = () => {
    return (
        <Section>
            <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300">
                <ul className="space-y-4">
                    {executiveSummaryContent.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="flex-shrink-0 h-6 w-6 text-brand-cyan mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
};
