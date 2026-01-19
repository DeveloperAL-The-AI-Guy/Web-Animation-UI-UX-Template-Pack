
import React from 'react';
import { Section, SectionTitle } from './Section';
import { implementationPlanContent } from '../data/content';

export const ImplementationPlan: React.FC = () => {
    return (
        <Section>
            <SectionTitle>A Recommended Weekend Project</SectionTitle>
            <p className="prose prose-invert max-w-none prose-p:text-gray-300">
                To put this guide into practice, here is a suggested plan to prototype several templates and a vibe kit in a single weekend.
            </p>
            <div className="mt-6 space-y-8">
                {implementationPlanContent.steps.map((step, index) => (
                    <div key={index}>
                        <h3 className="text-lg font-semibold text-brand-cyan">{step.day}</h3>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                            {step.tasks.map((task, taskIndex) => (
                                <li key={taskIndex}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};
