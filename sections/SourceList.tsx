
import React from 'react';
import { Section } from './Section';
import { sources } from '../data/content';

export const SourceList: React.FC = () => {
    return (
        <Section>
            <div className="divide-y divide-gray-800">
                {sources.sort((a,b) => a.id - b.id).map((source) => (
                    <div key={source.id} className="py-4">
                        <p className="text-sm font-medium text-gray-300">
                           <span className="font-bold text-brand-cyan mr-2">[{source.id}]</span> {source.title}
                        </p>
                        <div className="mt-1 flex items-center space-x-4 text-xs text-gray-400">
                            <span>{source.author} / {source.publication}</span>
                            <span>({source.date})</span>
                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                                Visit Source
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
