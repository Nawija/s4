import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";

const Nav = () => {
    const [showMenu, setMenu] = useState(false);
    const navRef = useRef(null);

    const handleMenu = () => setMenu(!showMenu);
    const closeMenu = () => setMenu(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenu(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-50"
        >
            <div className="mx-auto px-2 py-2 top-0 max-w-screen-2xl flex-between">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center justify-center"
                    aria-label="Logo"
                    title="Logo Seovileo"
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 62 62"
                        className="mr-1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask
                            id="path-1-outside-1_1428_194"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="62"
                            height="62"
                            fill="black"
                        >
                            <rect fill="white" width="62" height="62" />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M49.2905 1.67675C44.9202 -0.156628 39.8064 1.8632 37.8684 6.18816L33.3342 16.3072L19.4064 8.2847C13.6863 4.98989 6.24505 6.87668 2.78594 12.499C-2.83768 21.6394 5.69348 32.6606 16.2071 29.8374L28.7848 26.46L20.6998 44.5034C18.0024 50.5231 20.7469 57.4718 26.8298 60.0236C36.8213 64.215 47.0756 54.1335 42.804 44.3185L36.9007 30.7542C36.1492 29.0275 35.9996 27.2254 36.3344 25.5409C40.4795 26.4518 43.6911 30.0921 43.5614 34.6295L43.4921 37.0523C43.2416 45.8177 55.0821 49.0508 59.7354 41.4875C62.2375 37.4208 60.9117 32.192 56.7741 29.8087L39.7915 20.0266C41.1153 19.0152 42.7418 18.3369 44.5692 18.1591L46.494 17.9719C55.4295 17.1025 57.4868 5.11513 49.2905 1.67675Z"
                            />
                        </mask>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M49.2905 1.67675C44.9202 -0.156628 39.8064 1.8632 37.8684 6.18816L33.3342 16.3072L19.4064 8.2847C13.6863 4.98989 6.24505 6.87668 2.78594 12.499C-2.83768 21.6394 5.69348 32.6606 16.2071 29.8374L28.7848 26.46L20.6998 44.5034C18.0024 50.5231 20.7469 57.4718 26.8298 60.0236C36.8213 64.215 47.0756 54.1335 42.804 44.3185L36.9007 30.7542C36.1492 29.0275 35.9996 27.2254 36.3344 25.5409C40.4795 26.4518 43.6911 30.0921 43.5614 34.6295L43.4921 37.0523C43.2416 45.8177 55.0821 49.0508 59.7354 41.4875C62.2375 37.4208 60.9117 32.192 56.7741 29.8087L39.7915 20.0266C41.1153 19.0152 42.7418 18.3369 44.5692 18.1591L46.494 17.9719C55.4295 17.1025 57.4868 5.11513 49.2905 1.67675Z"
                            fill="url(#paint0_linear_1428_194)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_1428_194"
                                x1="61.0775"
                                y1="3.91187"
                                x2="5.88403"
                                y2="30.9987"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FFB800" />
                                <stop offset="0.5224" stop-color="#F6DAAF" />
                                <stop offset="1" stop-color="#FF932F" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <p className="-tracking-wide logo-color font-bold text-lg">
                        Seovileo
                    </p>
                </Link>

                <button
                    onClick={handleMenu}
                    aria-label="menu"
                    title="Menu"
                    className="p-2 lg:hidden"
                >
                    <svg
                        className={`transition-all duration-300 ${
                            showMenu
                                ? "rotate-180 scale-75"
                                : "rotate-0 scale-100"
                        }`}
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.82421 0.0768278C1.83984 0.299484 0.884758 1.04362 0.451164 1.92839C-0.515633 3.89128 0.445304 6.22917 2.47851 6.8737C3.34569 7.14909 4.08984 7.12566 4.93359 6.79753C6.3164 6.25847 7.25976 4.72917 7.12499 3.25261C7.08398 2.778 6.86132 2.08073 6.6328 1.69401C6.41015 1.31316 5.77148 0.686203 5.39062 0.475265C4.64648 0.0592496 3.60937 -0.104813 2.82421 0.0768278Z"
                            className={`transition-colors ${
                                showMenu ? "fill-[#FF9500]" : "fill-[#202020]"
                            }`}
                        />
                        <path
                            d="M13.5235 0.082519C12.5216 0.299316 11.5841 1.0376 11.1329 1.98096C10.4591 3.38721 10.752 5.03955 11.8594 6.08252C12.5801 6.75635 13.3126 7.04346 14.2852 7.04346C15.2872 7.04346 16.0899 6.72119 16.7579 6.05322C17.9005 4.9165 18.1524 3.27002 17.4024 1.84033C16.6993 0.498535 15.0528 -0.251465 13.5235 0.082519Z"
                            className={`transition-opacity fill-[#202020] ${
                                showMenu ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <path
                            d="M24.215 0.0824907C22.9552 0.352022 21.8478 1.44187 21.549 2.69577C21.4493 3.13523 21.4376 3.84421 21.5255 4.2778C21.6368 4.81101 22.0118 5.51413 22.422 5.95358C22.8556 6.40476 23.2658 6.67429 23.8751 6.88523C24.4611 7.09616 25.3868 7.10788 26.0021 6.92038C27.0685 6.5864 27.9708 5.71921 28.3283 4.68796C28.4454 4.35398 28.463 4.18405 28.463 3.50437C28.4572 2.8364 28.4396 2.66062 28.3283 2.36765C27.7013 0.668428 25.9611 -0.298369 24.215 0.0824907Z"
                            fill="#FF9500"
                        />
                        <path
                            d="M2.72461 10.7731C1.6875 11.0133 0.820313 11.6989 0.351563 12.6423C0.09375 13.1755 0 13.5739 0 14.2067C0 15.2614 0.287109 15.9587 1.02539 16.7028C1.76367 17.4469 2.51367 17.7516 3.57422 17.7399C4.92773 17.7223 6.09375 16.9782 6.67383 15.7712C6.9668 15.1618 7.05469 14.7048 7.01953 14.0133C6.9375 12.5309 6.04102 11.3708 4.58789 10.861C4.14844 10.7028 3.21094 10.6618 2.72461 10.7731Z"
                            className={`transition-opacity fill-[#202020] ${
                                showMenu ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <path
                            d="M13.2843 10.8082C11.9014 11.1715 10.8878 12.3375 10.6944 13.7848C10.3897 16.0465 12.3526 18.0153 14.6202 17.7282C15.4522 17.6227 16.1026 17.3004 16.7061 16.6969C17.7901 15.6129 18.0362 13.9372 17.3096 12.5485C17.0636 12.0739 16.3487 11.359 15.8741 11.1129C15.0948 10.7028 14.128 10.5914 13.2843 10.8082Z"
                            className={`transition-colors ${
                                showMenu ? "fill-[#FF9500]" : "fill-[#202020]"
                            }`}
                        />
                        <path
                            d="M23.996 10.8083C23.3632 10.9783 22.9003 11.2478 22.4023 11.7458C21.8808 12.2615 21.582 12.8181 21.4413 13.5154C21.2714 14.3474 21.3652 15.033 21.7577 15.8357C22.1913 16.7087 23.0234 17.3826 23.9843 17.6404C24.4882 17.7751 25.3671 17.7751 25.83 17.6404C27.998 17.0076 29.041 14.6521 28.0507 12.6248C27.7812 12.0798 27.1132 11.3943 26.58 11.113C25.8007 10.7029 24.8339 10.5916 23.996 10.8083Z"
                            className={`transition-opacity fill-[#FF9500] ${
                                showMenu ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <path
                            d="M2.98841 21.4274C2.22669 21.568 1.64075 21.8844 1.07825 22.4527C-0.0701866 23.6129 -0.269405 25.3649 0.591923 26.7945C0.879032 27.2633 1.48841 27.8199 2.00403 28.0719C4.53528 29.3199 7.44153 27.275 7.08997 24.4918C6.90833 23.0738 5.93567 21.9195 4.57044 21.5211C4.18372 21.4039 3.35169 21.357 2.98841 21.4274Z"
                            className={`transition-colors ${
                                showMenu ? "fill-[#FF9500]" : "fill-[#202020]"
                            }`}
                        />
                        <path
                            d="M13.6353 21.4275C12.2877 21.6736 11.1451 22.7635 10.8287 24.1111C10.7643 24.3865 10.7408 24.6736 10.7643 25.0896C10.8053 26.0447 11.1217 26.7654 11.7662 27.4041C13.7291 29.3436 17.0221 28.4353 17.6959 25.7635C17.8248 25.2478 17.7838 24.2342 17.608 23.7537C17.2447 22.7283 16.3424 21.8553 15.3228 21.5389C14.8834 21.4041 14.0689 21.3514 13.6353 21.4275Z"
                            className={`transition-opacity fill-[#202020] ${
                                showMenu ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <path
                            d="M24.2897 21.4276C23.0651 21.6502 21.9929 22.5643 21.571 23.7537C21.3952 24.2342 21.3542 25.2479 21.4831 25.7635C21.9518 27.6151 23.78 28.7635 25.6491 28.3709C27.905 27.8963 29.1003 25.3826 28.0515 23.3026C27.653 22.5115 26.821 21.8026 25.9772 21.5389C25.5378 21.4041 24.7233 21.3514 24.2897 21.4276Z"
                            fill="#FF9500"
                        />
                    </svg>
                </button>

                <ul
                    className={
                        showMenu
                            ? "absolute bg-white z-50 space-y-7 top-full left-0 shadow-lg py-4 w-full text-center font-bold text-[15px] transition-all duration-300 transform translate-y-0 opacity-100"
                            : "lg:flex hidden font-medium text-[15px]"
                    }
                >
                    <li>
                        <Link
                            onClick={closeMenu}
                            className="hover-link"
                            aria-label="Home"
                            title="Home"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            className="hover-link"
                            aria-label="Usługi"
                            title="Usługi"
                            to="/usługi"
                        >
                            Usługi
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            className="hover-link"
                            aria-label="Projekty"
                            title="Projekty"
                            to="/projekty"
                        >
                            Projekty
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            className="hover-link"
                            aria-label="Szablony"
                            title="Szablony"
                            to="/szablony"
                        >
                            Szablony
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            className="hover-link"
                            aria-label="Blog"
                            title="Blog"
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            className="hover-link"
                            aria-label="Kontakt"
                            title="Kontakt"
                            to="/kontakt"
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>

                <Link
                    to="/darmowa-wycena"
                    aria-label="Darmowa Wycena"
                    title="Darmowa Wycena"
                    className="hidden lg:flex blue-btn"
                >
                    Darmowa Wycena
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
