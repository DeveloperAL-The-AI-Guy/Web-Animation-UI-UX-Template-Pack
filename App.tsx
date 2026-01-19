
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { SectionKey } from './types';
import { XIcon } from './components/Icons';
import { TopNav } from './components/TopNav';
import { HomePage } from './sections/HomePage';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<SectionKey>('executiveSummary');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // This effect will scroll to the top of the page when the section changes.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeSection]);
    
    // Function to handle section changes, which also closes the sidebar.
    const handleSetSection = (section: SectionKey) => {
        setActiveSection(section);
        setIsSidebarOpen(false);
    }

    return (
        <div className="min-h-screen bg-gray-950 font-sans text-gray-300">
            {/* Off-canvas sidebar for all screen sizes */}
            <div className={`fixed inset-0 flex z-40 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} role="dialog" aria-modal="true">
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-900">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            type="button"
                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <XIcon className="h-6 w-6 text-white" />
                        </button>
                    </div>
                    <Sidebar activeSection={activeSection} setActiveSection={handleSetSection} />
                </div>
                <div className="flex-shrink-0 w-14" aria-hidden="true" onClick={() => setIsSidebarOpen(false)}>
                    {/* Dummy element to close sidebar on outside click */}
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <TopNav onMenuClick={() => setIsSidebarOpen(true)} />

                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                           {activeSection === 'executiveSummary' ? (
                               <HomePage setActiveSection={setActiveSection} />
                           ) : (
                               <ContentDisplay 
                                   activeSection={activeSection} 
                                   onBackToHome={() => setActiveSection('executiveSummary')} 
                               />
                           )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
