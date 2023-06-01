import React from "react";
import { Link } from "gatsby";

const Nav = () => {
    return (
        <nav>
            <div className="max-w-screen-2xl mx-auto px-2 py-1 flex-between">
                <div>
                    <p className="font-medium">Seovileo</p>
                </div>
                <ul className="flex-center space-x-6">
                    <li>Home</li>
                    <li>Usługi</li>
                    <li>Projekty</li>
                    <li>Szablony</li>
                    <li>Blog</li>
                    <li>Kontakt</li>
                </ul>
                <Link>Darmowa Wycena</Link>
            </div>
        </nav>
    );
};

export default Nav;
