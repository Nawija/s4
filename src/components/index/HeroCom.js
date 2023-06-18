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
            src="../../assets/hero.webp"
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
