import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import LiveSquares from "../components/liveSquares";

const IndexPage = () => {
    return (
        <Layout>
            <div className="relative flex-center flex-col">
                    <LiveSquares />
                <div className="relative h-96 w-full -z-10">
                    <div className="bg-gradient-to-tr from-blue-700 to-blue-500 h-full w-full -z-10" />
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl sm:text-4xl md:text-6xl lg:text-8xl w-max py-6 drop-shadow-lg text-white">
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
