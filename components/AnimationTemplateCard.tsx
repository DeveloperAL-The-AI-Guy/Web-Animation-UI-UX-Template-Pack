
import React from 'react';
import { AnimationTemplate } from '../types';
import { CodeBlock } from './CodeBlock';
import { sources } from '../data/content';

interface AnimationTemplateCardProps {
    template: AnimationTemplate;
}

const InfoPill: React.FC<{ title: string; content: string }> = ({ title, content }) => (
    <div>
        <h4 className="font-semibold text-gray-300 text-sm mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{content}</p>
    </div>
);

export const AnimationTemplateCard: React.FC<AnimationTemplateCardProps> = ({ template }) => {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-cyan tracking-tight">{template.name}</h3>
                <p className="mt-2 text-gray-400 text-sm">{template.useCases}</p>
            </div>

            <div className="px-6 py-4 border-t border-b border-gray-800 bg-gray-950/50">
                <h4 className="font-semibold text-gray-300 mb-2">How it Works</h4>
                <p className="text-gray-400 text-sm">{template.howItWorks}</p>
            </div>

            <div className="p-6">
                <h4 className="font-semibold text-gray-300 mb-2">Minimal Example</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h5 className="text-xs font-mono text-gray-500 mb-1">HTML</h5>
                        <CodeBlock code={template.example.html} language="html" />
                    </div>
                    <div>
                        <h5 className="text-xs font-mono text-gray-500 mb-1">CSS</h5>
                        <CodeBlock code={template.example.css} language="css" />
                    </div>
                </div>
                {template.example.js && (
                    <div>
                        <h5 className="text-xs font-mono text-gray-500 mb-1">JavaScript</h5>
                        <CodeBlock code={template.example.js} language="javascript" />
                    </div>
                )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 border-t border-gray-800 bg-gray-950/50">
                <InfoPill title="Accessibility" content={template.accessibilityNotes} />
                <InfoPill title="Performance" content={template.performanceNotes} />
                <InfoPill title="Mobile/Responsive" content={template.mobileNotes} />
                <InfoPill title="Fallback Strategy" content={template.fallbackStrategy} />
            </div>

            <div className="px-6 py-3 bg-gray-900 text-right">
                <span className="text-xs text-gray-500">
                    Inspirations: {template.inspirations.map((id, i) => (
                        <a key={i} href={sources.find(s => s.id === id)?.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-brand-blue hover:underline">
                            [{id}]
                        </a>
                    ))}
                </span>
            </div>
        </div>
    );
};
