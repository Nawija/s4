import React from "react";
import LiveSquares from "../../components/liveSquares";
import { StaticImage } from "gatsby-plugin-image";

const HeroCom = () => (
    <div className="relative h-72 md:h-96 w-full -z-10">
        <LiveSquares />
        <StaticImage
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0",
                left: "0",
                opacity: ".2",
                zIndex: "-10",
            }}
            placeholder="domainColor"
            src="https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2593&q=80"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl sm:text-4xl md:text-6xl lg:text-8xl w-max py-6 drop-shadow-lg text-white px-3">
            Doskonałe Strony
        </p>
        <div className="relative h-full w-full -z-20">
            <div className="bg-gradient-to-tr from-blue-800 to-sky-500 h-full w-full -z-10" />
        </div>
    </div>
);

export default HeroCom;
