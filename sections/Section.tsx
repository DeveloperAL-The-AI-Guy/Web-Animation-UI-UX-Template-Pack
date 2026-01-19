
import React, { PropsWithChildren } from 'react';

export const Section: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return <div className="space-y-6 animate-slide-up">{children}</div>;
};

export const SectionTitle: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return <h2 className="text-xl sm:text-2xl font-semibold text-white border-l-4 border-brand-cyan pl-4">{children}</h2>;
};

export const SubSection: React.FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
    return (
        <div className="mt-6 space-y-3">
            <h3 className="text-lg sm:text-xl font-medium text-brand-cyan">{title}</h3>
            <div className="prose prose-invert prose-p:text-gray-300 prose-li:text-gray-300 max-w-none">
              {children}
            </div>
        </div>
    );
};
