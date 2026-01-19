
import React from 'react';
import { VibeKit } from '../types';
import { CodeBlock } from './CodeBlock';

interface VibeKitCardProps {
    kit: VibeKit;
}

export const VibeKitCard: React.FC<VibeKitCardProps> = ({ kit }) => {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg">
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">{kit.name}</h3>
                <p className="mt-2 text-gray-400">{kit.description}</p>
            </div>
            <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h4 className="font-semibold text-brand-cyan mb-2">Palette</h4>
                    <div className="flex space-x-2">
                        {kit.palette.map((color, index) => (
                            <div key={index} className="flex-1">
                                <div className="h-10 rounded" style={{ backgroundColor: color.hex }}></div>
                                <div className="text-xs text-gray-400 mt-1">{color.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-brand-cyan mb-2">Typography</h4>
                    <p className="text-sm text-gray-300">{kit.typography}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-brand-cyan mb-2">Motion</h4>
                    <p className="text-sm text-gray-300">{kit.motion}</p>
                </div>
            </div>
            <div className="p-6 border-t border-gray-800">
                <h4 className="font-semibold text-brand-cyan mb-2">Examples</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <h5 className="text-sm text-gray-400 mb-1">Hero Section</h5>
                        <CodeBlock code={kit.heroExample.html} language="html" />
                        <CodeBlock code={kit.heroExample.css} language="css" />
                    </div>
                     <div>
                        <h5 className="text-sm text-gray-400 mb-1">Feature Card</h5>
                        <CodeBlock code={kit.featureExample.html} language="html" />
                        <CodeBlock code={kit.featureExample.css} language="css" />
                    </div>
                </div>
            </div>
        </div>
    );
};
