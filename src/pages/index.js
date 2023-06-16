import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import LiveSquares from "../components/liveSquares";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout>
            <div className="flex-center flex-col">
                <div className="relative">
                    <LiveSquares />
                    <StaticImage
                        imgClassName="hidden md:flex"
                        alt="doskonałe strony"
                        breakpoints="[750, 1080, 1366, 1920]"
                        quality={100}
                        src="../assets/hh.jpg"
                    />
                    <StaticImage
                        imgClassName="flex md:hidden"
                        alt="doskonałe strony"
                        breakpoints="[750, 1080, 1366, 1920]"
                        quality={100}
                        src="../assets/sh.jpg"
                    />
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl sm:text-4xl md:text-6xl lg:text-8xl w-max py-6 drop-shadow-lg">
                        Doskonałe Strony
                    </p>
                </div>
                <p className="text-gray-500 py-6 w-4/5 md:w-3/5">
                    There are many variations of passages of Lorem Ipsum
                    available
                </p>
            </div>

            <div className="h-[200vh]" />
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" description="" />;

export default IndexPage;
