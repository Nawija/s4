import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
    return (
        <Layout>
            <div className="flex-center flex-col py-10">
                <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-max py-6">
                    Strona Główna
                </h1>
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
