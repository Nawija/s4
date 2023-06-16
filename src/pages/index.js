import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import LiveSquares from "../components/liveSquares";

import { CardCom } from "../components/index";

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
