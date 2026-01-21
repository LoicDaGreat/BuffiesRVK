import React from 'react';
import { Head } from '@inertiajs/react';
import BoxingTopNav from '@/Components/Headers/BoxingTopNav';

const MainIndex = () => {
    return (
        <>
            <Head title="Home" />

            <div className="min-h-screen bg-black text-white">
                <BoxingTopNav logoSrc="/images/boxing-logo.png" />

                {/* Page content placeholder */}
                <main className="mx-auto max-w-5xl px-4 py-16">
                    <h1 className="mb-4 text-3xl font-bold tracking-wide">
                        Main Page
                    </h1>
                    <p className="text-sm text-gray-300">
                        Replace this section with your actual landing page content.
                    </p>
                </main>
            </div>
        </>
    );
}

export default MainIndex;
