import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import LiveSquares from "../components/liveSquares";

import { CardCom } from "../components/index";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout>
            <div className="relative flex-center flex-col z-0">
                <div className="relative h-72 md:h-96 w-full -z-10">
                    <LiveSquares />
                    <div className="relative h-full w-full -z-10">
                        <div className="bg-gradient-to-tr from-blue-800 to-sky-500 h-full w-full -z-10" />
                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl sm:text-4xl md:text-6xl lg:text-8xl w-max py-6 drop-shadow-lg text-white px-3">
                            Doskonałe Strony
                        </p>
                    </div>
                </div>
                <CardCom />

                <h2 className="text-gray-700 text-xl font-semibold px-3">
                    Odkryj Potęgę Profesjonalnych Stron Internetowych!
                </h2>
                <p className="px-3 sm:w-4/5 md:w-3/5 lg:w-2/5 my-2 py-2 text-gray-700 lg:text-lg">
                    Zajmuję się tworzeniem unikalnych stron internetowych, które
                    przyciągają uwagę klientów i generują większe zyski
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="w-full lg:w-1/2">
                        <StaticImage quality={100} src="../assets/x.jpg" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <StaticImage quality={100} src="../assets/x.jpg" />
                    </div>
                </div>
            </div>

            <div className="h-[100vh]" />
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" description="" />;

export default IndexPage;
