import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Nav from "./nav";
import Footer from "./footer";
import CircleFixed from "./circleFixed";

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
            <CircleFixed />

            <main>{children}</main>

            <Footer />
        </>
    );
};

export default Layout;
