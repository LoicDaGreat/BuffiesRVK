import React from 'react';

/**
 * Full-width stadium hero header inspired by the provided design.
 *
 * Assumes Tailwind CSS is available (Laravel Breeze default).
 *
 * Props let you swap out text and background images as needed.
 */
export default function SoccerHeroHeader({
    backgroundImage = '/images/hero-stadium.jpg',
    logoImage = '/images/club-logo.png',
    title = 'REAL SOCCER',
}) {
    return (
        <header className="relative text-white">
            {/* Top sponsor + social bar */}
            <div className="z-20 relative bg-black/90 text-xs tracking-widest uppercase">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-4">
                        <span className="font-semibold">★ Heineken</span>
                        <span className="font-semibold">Puma</span>
                    </div>

                    <div className="flex items-center gap-4 text-[10px]">
                        <button className="hover:text-yellow-300" aria-label="Facebook">
                            F
                        </button>
                        <button className="hover:text-yellow-300" aria-label="Twitter">
                            T
                        </button>
                        <button className="hover:text-yellow-300" aria-label="Pinterest">
                            P
                        </button>
                        <button className="hover:text-yellow-300" aria-label="Vimeo">
                            V
                        </button>
                        <button className="hover:text-yellow-300" aria-label="Shopping cart">
                            🛒
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero background */}
            <div
                className="relative h-[420px] w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Dark overlay to make text readable */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Navigation + logo */}
                <div className="relative z-20">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-6 text-[11px] font-semibold tracking-[0.18em] uppercase">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            {logoImage && (
                                <img
                                    src={logoImage}
                                    alt="Club logo"
                                    className="h-10 w-auto object-contain drop-shadow-md"
                                />
                            )}
                            <span className="text-xs">RSL FC</span>
                        </div>

                        {/* Nav links */}
                        <nav className="hidden items-center gap-7 md:flex">
                            <a href="#" className="hover:text-yellow-300">
                                Home
                            </a>
                            <a href="#" className="hover:text-yellow-300">
                                Pages
                            </a>
                            <a href="#" className="hover:text-yellow-300">
                                Fixtures &amp; Results
                            </a>
                            <a href="#" className="hover:text-yellow-300">
                                League Table
                            </a>
                            <a href="#" className="hover:text-yellow-300">
                                Team
                            </a>
                            <a href="#" className="hover:text-yellow-300">
                                News
                            </a>
                            <a href="#" className="hover:text-yellow-300">
                                Shortcodes
                            </a>
                            <a href="#" className="hover:text-yellow-300">
                                Shop
                            </a>
                        </nav>

                        {/* Search icon */}
                        <button
                            type="button"
                            className="ml-4 rounded-full border border-white/40 px-2 py-1 text-xs hover:border-yellow-300 hover:text-yellow-300"
                            aria-label="Search"
                        >
                            🔍
                        </button>
                    </div>
                </div>

                {/* Centered title over hero */}
                <div className="relative z-10 flex h-full items-center justify-center">
                    <h1 className="mt-10 text-center text-4xl font-extrabold tracking-[0.35em] md:text-5xl">
                        {title}
                    </h1>
                </div>
            </div>
        </header>
    );
}
