import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
    return (
        <Layout>
            <div className="flex-center flex-col">
                <div className="relative bgImg">
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
