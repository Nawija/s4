import React from "react";
import { Link } from "gatsby";

const Nav = () => {
    return (
        <nav className="w-full py-3 px-3 bg-white sticky top-0 z-50 overflow-hidden">
            <div className="mx-auto max-w-screen-2xl flex-between">
                <Link
                    to="/"
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

                <ul className="lg:flex hidden space-x-2 font-medium text-[14px]">
                    <li>
                        <Link
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

                <button
                    aria-label="menu"
                    title="Menu"
                    className="p-2 lg:hidden"
                >
                    <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.82421 0.0768278C1.83984 0.299484 0.884758 1.04362 0.451164 1.92839C-0.515633 3.89128 0.445304 6.22917 2.47851 6.8737C3.34569 7.14909 4.08984 7.12566 4.93359 6.79753C6.3164 6.25847 7.25976 4.72917 7.12499 3.25261C7.08398 2.778 6.86132 2.08073 6.6328 1.69401C6.41015 1.31316 5.77148 0.686203 5.39062 0.475265C4.64648 0.0592496 3.60937 -0.104813 2.82421 0.0768278Z"
                            fill="#282A3B"
                        />
                        <path
                            d="M2.86929 0.271684L2.86833 0.2719C1.94113 0.481625 1.03689 1.18767 0.630757 2.0164L0.630582 2.01676C-0.28462 3.8749 0.627756 6.0772 2.53894 6.68305L2.53904 6.68308C3.36286 6.9447 4.06006 6.92265 4.8611 6.61113C6.16059 6.10446 7.0525 4.65876 6.92582 3.27079L6.92573 3.26983C6.88723 2.82422 6.67347 2.15597 6.46062 1.79576L6.46014 1.79495C6.36208 1.62721 6.16143 1.38983 5.93096 1.16367C5.70032 0.937347 5.46062 0.74266 5.29372 0.650225L5.29302 0.649837C4.5888 0.25614 3.60229 0.102107 2.86929 0.271684Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                        <path
                            d="M13.5235 0.082519C12.5216 0.299316 11.5841 1.0376 11.1329 1.98096C10.4591 3.38721 10.752 5.03955 11.8594 6.08252C12.5801 6.75635 13.3126 7.04346 14.2852 7.04346C15.2872 7.04346 16.0899 6.72119 16.7579 6.05322C17.9005 4.9165 18.1524 3.27002 17.4024 1.84033C16.6993 0.498535 15.0528 -0.251465 13.5235 0.082519Z"
                            fill="#282A3B"
                        />
                        <path
                            d="M13.5662 0.277914L13.5658 0.277996C12.6246 0.481643 11.7379 1.17939 11.3133 2.06725L11.3132 2.06738C10.6758 3.39768 10.9546 4.95539 11.9963 5.93669C12.68 6.57578 13.3635 6.84346 14.2852 6.84346C15.2375 6.84346 15.9883 6.53993 16.6165 5.9118L16.6168 5.91144C17.6971 4.83672 17.9346 3.28543 17.2253 1.93324L17.2253 1.93316C16.5656 0.674252 15.0109 -0.0376053 13.5662 0.277914Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                        <path
                            d="M24.215 0.0824907C22.9552 0.352022 21.8478 1.44187 21.549 2.69577C21.4493 3.13523 21.4376 3.84421 21.5255 4.2778C21.6368 4.81101 22.0118 5.51413 22.422 5.95358C22.8556 6.40476 23.2658 6.67429 23.8751 6.88523C24.4611 7.09616 25.3868 7.10788 26.0021 6.92038C27.0685 6.5864 27.9708 5.71921 28.3283 4.68796C28.4454 4.35398 28.463 4.18405 28.463 3.50437C28.4572 2.8364 28.4396 2.66062 28.3283 2.36765C27.7013 0.668428 25.9611 -0.298369 24.215 0.0824907Z"
                            fill="#FF9500"
                        />
                        <path
                            d="M24.2576 0.277898L24.2568 0.278064C23.0735 0.53124 22.0253 1.56195 21.7438 2.74105C21.6504 3.15386 21.6396 3.83295 21.7214 4.2375C21.8246 4.73113 22.1801 5.40084 22.5672 5.81606C22.9792 6.24446 23.3624 6.4961 23.9406 6.69623L23.9406 6.69621L23.9429 6.69705C24.209 6.79285 24.5636 6.8466 24.9307 6.85224C25.297 6.85787 25.6603 6.81533 25.943 6.72929C26.9502 6.41361 27.8032 5.59208 28.1393 4.62246L28.1395 4.62174C28.245 4.32122 28.263 4.17949 28.263 3.50525C28.2572 2.83891 28.2387 2.69509 28.1413 2.43869L28.1413 2.43869L28.1406 2.43688C27.5475 0.829329 25.9042 -0.081264 24.2576 0.277898Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                        <path
                            d="M2.72461 10.7731C1.6875 11.0133 0.820313 11.6989 0.351563 12.6423C0.09375 13.1755 0 13.5739 0 14.2067C0 15.2614 0.287109 15.9587 1.02539 16.7028C1.76367 17.4469 2.51367 17.7516 3.57422 17.7399C4.92773 17.7223 6.09375 16.9782 6.67383 15.7712C6.9668 15.1618 7.05469 14.7048 7.01953 14.0133C6.9375 12.5309 6.04102 11.3708 4.58789 10.861C4.14844 10.7028 3.21094 10.6618 2.72461 10.7731Z"
                            fill="#282A3B"
                        />
                        <path
                            d="M6.49357 15.6845L6.49358 15.6845C6.77136 15.1067 6.85328 14.6832 6.81982 14.024C6.74235 12.6266 5.9023 11.5341 4.52169 11.0497L4.52168 11.0497L4.52015 11.0492C4.32845 10.9802 4.00769 10.9316 3.66463 10.9158C3.32297 10.9 2.98744 10.9181 2.76939 10.968C1.79074 11.1948 0.973228 11.8413 0.531147 12.7303C0.287069 13.2353 0.2 13.6039 0.2 14.2067C0.2 14.7155 0.269181 15.1262 0.420825 15.4952C0.572449 15.8641 0.811428 16.2032 1.16737 16.5619C1.52181 16.9192 1.87201 17.164 2.25431 17.3195C2.63669 17.4751 3.06181 17.5455 3.57182 17.5399C4.84976 17.5233 5.94661 16.8226 6.49357 15.6845Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                        <path
                            d="M13.2843 10.8082C11.9014 11.1715 10.8878 12.3375 10.6944 13.7848C10.3897 16.0465 12.3526 18.0153 14.6202 17.7282C15.4522 17.6227 16.1026 17.3004 16.7061 16.6969C17.7901 15.6129 18.0362 13.9372 17.3096 12.5485C17.0636 12.0739 16.3487 11.359 15.8741 11.1129C15.0948 10.7028 14.128 10.5914 13.2843 10.8082Z"
                            fill="#282A3B"
                        />
                        <path
                            d="M10.8927 13.8113L10.8926 13.8115C10.6056 15.9422 12.4569 17.8005 14.5951 17.5298C15.3821 17.43 15.9918 17.1284 16.5647 16.5555C17.5853 15.5349 17.8195 13.9544 17.1324 12.6412L17.1321 12.6405C17.0227 12.4295 16.7986 12.1489 16.5361 11.8864C16.2737 11.6239 15.9931 11.3999 15.782 11.2905L15.782 11.2905L15.781 11.2899C15.0457 10.903 14.1301 10.7975 13.3345 11.0018C12.0327 11.344 11.0756 12.4422 10.8927 13.8113Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                        <path
                            d="M23.996 10.8083C23.3632 10.9783 22.9003 11.2478 22.4023 11.7458C21.8808 12.2615 21.582 12.8181 21.4413 13.5154C21.2714 14.3474 21.3652 15.033 21.7577 15.8357C22.1913 16.7087 23.0234 17.3826 23.9843 17.6404C24.4882 17.7751 25.3671 17.7751 25.83 17.6404C27.998 17.0076 29.041 14.6521 28.0507 12.6248C27.7812 12.0798 27.1132 11.3943 26.58 11.113C25.8007 10.7029 24.8339 10.5916 23.996 10.8083Z"
                            fill="#FF9500"
                        />
                        <path
                            d="M23.9843 17.6404L24.036 17.4472C24.265 17.5084 24.5917 17.5415 24.9225 17.5415C25.2543 17.5415 25.5684 17.5082 25.774 17.4484C27.823 16.8503 28.8066 14.6286 27.8712 12.713C27.7487 12.4654 27.5291 12.1748 27.2709 11.9095C27.0125 11.644 26.7288 11.4176 26.4868 11.29C25.7515 10.903 24.8362 10.7978 24.047 11.0017C23.4503 11.1621 23.0181 11.4129 22.5437 11.8873L22.5429 11.8881C22.0494 12.376 21.7701 12.897 21.6374 13.5549L21.6373 13.5554C21.4767 14.3416 21.5631 14.9822 21.9371 15.7473C22.3447 16.5674 23.1294 17.2039 24.0361 17.4472L23.9843 17.6404ZM23.9843 17.6404C24.4882 17.7751 25.3671 17.7751 25.83 17.6404C27.998 17.0076 29.0409 14.6521 28.0507 12.6248L23.9843 17.6404Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                        <path
                            d="M2.98841 21.4274C2.22669 21.568 1.64075 21.8844 1.07825 22.4527C-0.0701866 23.6129 -0.269405 25.3649 0.591923 26.7945C0.879032 27.2633 1.48841 27.8199 2.00403 28.0719C4.53528 29.3199 7.44153 27.275 7.08997 24.4918C6.90833 23.0738 5.93567 21.9195 4.57044 21.5211C4.18372 21.4039 3.35169 21.357 2.98841 21.4274Z"
                            fill="#282A3B"
                        />
                        <path
                            d="M3.02641 21.6237L3.02472 21.624C2.30498 21.7569 1.75549 22.0528 1.2204 22.5934L1.22039 22.5934C0.138174 23.6867 -0.0520291 25.3375 0.76285 26.6907C1.03011 27.1266 1.61035 27.6569 2.09184 27.8922L2.09248 27.8925C4.48375 29.0715 7.22263 27.1388 6.89156 24.517C6.71977 23.1766 5.80182 22.0888 4.51441 21.7131L4.5144 21.7131L4.51244 21.7125C4.34163 21.6607 4.05543 21.6208 3.759 21.6036C3.46163 21.5863 3.18295 21.5934 3.02641 21.6237Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                        <path
                            d="M13.6353 21.4275C12.2877 21.6736 11.1451 22.7635 10.8287 24.1111C10.7643 24.3865 10.7408 24.6736 10.7643 25.0896C10.8053 26.0447 11.1217 26.7654 11.7662 27.4041C13.7291 29.3436 17.0221 28.4353 17.6959 25.7635C17.8248 25.2478 17.7838 24.2342 17.608 23.7537C17.2447 22.7283 16.3424 21.8553 15.3228 21.5389C14.8834 21.4041 14.0689 21.3514 13.6353 21.4275Z"
                            fill="#282A3B"
                        />
                        <path
                            d="M10.964 25.0784L10.9641 25.0811C11.003 25.9877 11.2996 26.6601 11.9069 27.2619C13.7606 29.0934 16.8661 28.2351 17.5019 25.7148C17.5596 25.4838 17.5821 25.1233 17.5664 24.7539C17.5506 24.3836 17.4976 24.0341 17.4202 23.8224L17.4202 23.8224L17.4195 23.8205C17.0769 22.8536 16.222 22.0275 15.264 21.73C15.065 21.669 14.7688 21.6237 14.4638 21.6037C14.1587 21.5837 13.8649 21.5904 13.6706 21.6244C12.4022 21.8563 11.3217 22.8862 11.0234 24.1568C10.9643 24.4093 10.9413 24.6765 10.964 25.0784Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                        <path
                            d="M24.2897 21.4276C23.0651 21.6502 21.9929 22.5643 21.571 23.7537C21.3952 24.2342 21.3542 25.2479 21.4831 25.7635C21.9518 27.6151 23.78 28.7635 25.6491 28.3709C27.905 27.8963 29.1003 25.3826 28.0515 23.3026C27.653 22.5115 26.821 21.8026 25.9772 21.5389C25.5378 21.4041 24.7233 21.3514 24.2897 21.4276Z"
                            fill="#FF9500"
                        />
                        <path
                            d="M21.7595 23.8206L21.7595 23.8206C22.1576 22.6982 23.1717 21.8344 24.3249 21.6244C24.5192 21.5904 24.813 21.5837 25.1182 21.6037C25.423 21.6237 25.7192 21.669 25.9181 21.73C26.7096 21.9775 27.4987 22.6497 27.8728 23.3925L27.8729 23.3926C28.8636 25.3574 27.7331 27.728 25.608 28.1752L21.7595 23.8206ZM21.7595 23.8206L21.7588 23.8224M21.7595 23.8206L21.7588 23.8224M21.7588 23.8224C21.6814 24.0341 21.6284 24.3836 21.6126 24.7539M21.7588 23.8224L21.6126 24.7539M21.6126 24.7539C21.5969 25.1232 21.6193 25.4836 21.6771 25.7147M21.6126 24.7539L21.6771 25.7147M21.6771 25.7147C22.1198 27.4627 23.8446 28.5455 25.6079 28.1752L21.6771 25.7147Z"
                            stroke="#202020"
                            stroke-opacity="0.2"
                            stroke-width="0.4"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Nav;
