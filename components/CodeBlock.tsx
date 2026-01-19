
import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface CodeBlockProps {
    code: string;
    language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    if (!code || code.trim() === '') {
        return null;
    }

    return (
        <div className="relative group bg-gray-900 rounded-lg my-4">
            <div className="absolute top-2 right-2">
                <button
                    onClick={handleCopy}
                    className="p-2 bg-gray-700 rounded-md text-gray-400 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all duration-200 opacity-0 group-hover:opacity-100"
                    aria-label="Copy code"
                >
                    {isCopied ? (
                        <CheckIcon className="h-5 w-5 text-green-400" />
                    ) : (
                        <CopyIcon className="h-5 w-5" />
                    )}
                </button>
            </div>
            <pre className="p-4 text-sm overflow-x-auto text-gray-300">
                <code className={`language-${language}`}>{code.trim()}</code>
            </pre>
        </div>
    );
};
