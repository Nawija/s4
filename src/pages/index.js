import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout>
            <div className="flex-center flex-col py-10">
                <div className="relative w-full h-max">
                    <StaticImage
                        className="w-full h-full inset-0"
                        src="../assets/3d-abstrakcyjne-tlo-z-nowoczesnym-wzorem-splotu.jpg"
                    />
                    <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-max py-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        Strona Główna
                    </h1>
                </div>
                <p className="text-gray-400 py-6 w-4/5 md:w-3/5">
                    There are many variations of passages of Lorem Ipsum
                    available
                </p>
            </div>

            <div className="h-[200vh]" />
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" />;

export default IndexPage;
