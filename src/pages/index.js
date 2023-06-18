import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";


import { HeroCom, CardCom, ArticleCom, ServiceCom } from "../components/index";

const IndexPage = () => {
    return (
        <Layout>
            <div className="relative flex-center flex-col z-0">
                <HeroCom />
                <CardCom />
                <section className="flex flex-col items-center justify-center w-full">
                    <h2 className="title">
                        Odkryj Potęgę Profesjonalnych Stron Internetowych!
                    </h2>
                    <p className="px-3 sm:w-4/5 md:w-3/5 lg:w-2/5">
                        Zajmuję się tworzeniem unikalnych stron internetowych,
                        które przyciągają uwagę klientów i generują większe
                        zyski
                    </p>
                </section>
            </div>
            <ArticleCom />
            <ServiceCom />

            <div className="py-12 bg-gradient-to-tr from-violet-500 to-blue-500">

            </div>

            <div className="h-[100vh]" />
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" description="" />;

export default IndexPage;
