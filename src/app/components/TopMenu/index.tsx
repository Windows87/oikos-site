'use client';

import Link from "next/link";
import { useState } from "react";
import "./styles.css";

/* eslint-disable @next/next/no-img-element */
export default function TopMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="top-menu">
            <Link href="/" onClick={closeMenu}>
                <img src="https://i.imgur.com/S8yAKDY.png" alt="logo oikos" />
            </Link>
            
            {/* Hamburger Button */}
            <button 
                className="hamburger-btn"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link href="/sobre-nos" onClick={closeMenu}>Sobre Nós</Link>
                <Link href="/nosso-culto" onClick={closeMenu}>Nosso Culto</Link>
                <Link href="/pequenos-grupos" onClick={closeMenu}>Pequenos Grupos</Link>
                <Link href="/para-ceticos" onClick={closeMenu}>Para Céticos</Link>
                <Link href="/nosso-culto" onClick={closeMenu}>
                    <button>Visitar</button>
                </Link>
            </nav>

            {/* Overlay for mobile */}
            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </div>
    )
}