import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
    return (
        <Layout>
            <h1>hello</h1>
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" />;

export default IndexPage;
