import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import "../styles/template.css";

const ServiceTemp = ({
    pageContext: { slug },
    data: { datoCmsUsluga, allDatoCmsUsluga },
}) => {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row overflow-hidden w-full z-10 mt-10 lg:mt-16">
                <section class="container px-3 xl:px-32 mx-auto lg:w-4/5">
                    <h1 class="text-4xl lg:text-5xl text-gray-800 font-bold md:pl-12 text-start capitalize pb-2 mb-5">
                        {datoCmsUsluga.title}
                    </h1>
                    <section class="mb-6 md:mb-12 text-gray-800">
                        <div class="mx-auto text-start lg:text-left">
                            <div class="flex flex-col items-center md:items-center">
                                <div className="md:px-12 my-4">
                                    <GatsbyImage
                                        image={getImage(datoCmsUsluga.img)}
                                        alt={datoCmsUsluga.img.alt}
                                        title={datoCmsUsluga.img.title}
                                    />
                                </div>

                                <div class="block mt-1 -tracking-wide rounded-lg py-3 md:px-12 text-start">
                                    <div class="text-lg mb-4 pb-2">
                                        <p
                                            id="descriptionHtml"
                                            dangerouslySetInnerHTML={{
                                                __html: datoCmsUsluga.desc,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="mt-2 my-12 mx-auto lg:w-1/5 lg:sticky top-0">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 sm:gap-12">
                        {allDatoCmsUsluga.edges.map(({ node }) => (
                            <Link
                                to={`/` + node.slug}
                                className="flex flex-col xl:flex-row items-center px-2 justify-start m-0 gap-4 text-start"
                            >
                                <div className="group w-32 h-32 block self-center shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-95 transition duration-200"
                                        image={getImage(node.img)}
                                        alt={node.imgtitle}
                                        title={node.imgtitle}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="hoverLink text-sm font-medium active:text-gray-900 capitalize transition duration-100">
                                        {node.title}
                                    </h2>
                                    <p className="text-[12px] bg-emerald-600 w-20 text-center text-white mx-auto mt-1 xl:m-0 px-2 rounded-xl">
                                        Zobacz
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
                <div className="h-[200vh]" />
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsUsluga } }) => (
    <Seo
        title={datoCmsUsluga.seo.title}
        description={datoCmsUsluga.seo.description}
    />
);

export default ServiceTemp;

export const query = graphql`
    query ($slug: String) {
        datoCmsUsluga(slug: { eq: $slug }) {
            desc
            title
            slug
            img {
                gatsbyImageData(
                    placeholder: NONE
                    height: 400
                    width: 400
                    forceBlurhash: false
                )
            }
            seo {
                description
                title
            }
        }
        allDatoCmsUsluga {
            edges {
                node {
                    title
                    slug
                    img {
                        gatsbyImageData(
                            height: 200
                            width: 200
                            forceBlurhash: false
                            placeholder: NONE
                        )
                    }
                }
            }
        }
    }
`;