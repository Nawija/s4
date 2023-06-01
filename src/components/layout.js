import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Nav from "./Nav";
import Footer from "./footer";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Nav siteTitle={data.site.siteMetadata?.title || `Seovileo`} />

            <main>{children}</main>

            <Footer />
        </>
    );
};

export default Layout;
