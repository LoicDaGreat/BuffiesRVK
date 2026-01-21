import React from 'react';

/**
 * Slim dark header with centered boxing logo and navigation links, inspired
 * by the screenshot you provided (logo in the middle, links on both sides).
 *
 * Tailwind CSS is used for layout / styling.
 */

type BoxingTopNavProps = {
    logoSrc?: string;
};

const BoxingTopNav: React.FC<BoxingTopNavProps> = ({
    logoSrc = '/images/boxing-logo.png',
}) => {
    const leftLinks = ['Home', 'About Us', 'Offer & Pricing'];
    const rightLinks = ['Fights', 'Contact Us', 'Buy Now'];

    const renderLink = (label: string) => (
        <button
            key={label}
            type="button"
            className="px-4 text-[10px] tracking-[0.25em] uppercase text-amber-200 transition hover:text-white"
        >
            {label}
        </button>
    );

    return (
        <header className="w-full bg-black/95 text-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                {/* Left nav links */}
                <nav className="flex flex-1 items-center justify-start gap-4">
                    {leftLinks.map(renderLink)}
                </nav>

                {/* Center logo */}
                <div className="flex flex-none items-center justify-center px-4">
                    {logoSrc && (
                        <img
                            src={logoSrc}
                            alt="Boxing logo"
                            className="h-10 w-auto object-contain"
                        />
                    )}
                </div>

                {/* Right nav links */}
                <nav className="flex flex-1 items-center justify-end gap-4">
                    {rightLinks.map(renderLink)}
                </nav>
            </div>
        </header>
    );
};

export default BoxingTopNav;
