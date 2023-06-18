import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import {
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    WhatsappIcon,
} from "react-share";

import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    WhatsappShareButton,
} from "react-share";

const ServiceTemp = ({
    pageContext: { slug },
    data: { datoCmsUsluga, allDatoCmsUsluga },
}) => {
    return (
        <Layout>
            <div className="relative">
                <div className=" absolute inset-0 bg-blue-500/50 z-10" />
                <GatsbyImage
                    style={{
                        height: "20vh",
                        width: "100%",
                    }}
                    image={getImage(datoCmsUsluga.descUsluga[0].img)}
                    alt={datoCmsUsluga.descUsluga[0].img.alt}
                    title={datoCmsUsluga.descUsluga[0].img.title}
                />
            </div>
            <div className="flex flex-col lg:flex-row w-full z-10 mt-10 lg:mt-16">
                <section class="container px-3 xl:px-32 mx-auto lg:w-4/5">
                    <section class="mb-6 md:mb-12 text-gray-800">
                        <div class="mx-auto text-start lg:text-left md:px-24">
                            <h1 class="text-4xl lg:text-5xl text-gray-800 font-bold text-start capitalize pb-2 mb-5">
                                {datoCmsUsluga.descUsluga[0].title}
                            </h1>
                            <div class="flex flex-col items-center md:items-center">
                                <GatsbyImage
                                    image={getImage(
                                        datoCmsUsluga.descUsluga[0].img
                                    )}
                                    alt={datoCmsUsluga.descUsluga[0].img.alt}
                                    title={
                                        datoCmsUsluga.descUsluga[0].img.title
                                    }
                                />

                                <div class="block mt-1 -tracking-wide rounded-lg py-3 text-start">
                                    <div class="text-lg mb-4 pb-2">
                                        <div
                                            id="descHtml"
                                            dangerouslySetInnerHTML={{
                                                __html: datoCmsUsluga
                                                    .descUsluga[0].desc,
                                            }}
                                        />
                                    </div>
                                    <div className="shadow-md bg-sky-100 w-max p-3 rounded-lg">
                                        <p className="px-3 font-bold text-green-600">
                                            Udostępnij w Social Media
                                        </p>
                                        <div className="flex items-center justify-start space-x-4 mx-3 my-4">
                                            <FacebookShareButton
                                                url={`https://seovileo.pl/blog/${datoCmsUsluga.slug}`}
                                                quote={datoCmsUsluga.title}
                                                hashtag="#seovileo"
                                            >
                                                <div className="w-6 h-6">
                                                    <FacebookIcon
                                                        size={35}
                                                        round={true}
                                                    />
                                                </div>
                                            </FacebookShareButton>
                                            <TwitterShareButton
                                                url={`https://seovileo.pl/blog/${datoCmsUsluga.slug}`}
                                                title={datoCmsUsluga.title}
                                                hashtags={["seovileo"]}
                                            >
                                                <div className="w-6 h-6">
                                                    <TwitterIcon
                                                        size={35}
                                                        round={true}
                                                    />
                                                </div>
                                            </TwitterShareButton>
                                            <PinterestShareButton
                                                url={`https://seovileo.pl/blog/${datoCmsUsluga.slug}`}
                                                media={datoCmsUsluga.img.url}
                                                summary={
                                                    datoCmsUsluga.smallDescription
                                                }
                                                source="seovileo.pl"
                                            >
                                                <div className="w-6 h-6">
                                                    <PinterestIcon
                                                        size={35}
                                                        round={true}
                                                    />
                                                </div>
                                            </PinterestShareButton>
                                            <WhatsappShareButton
                                                url={`https://seovileo.pl/blog/${datoCmsUsluga.slug}`}
                                                title={datoCmsUsluga.title}
                                                summary={
                                                    datoCmsUsluga.smallDescription
                                                }
                                                source="seovileo.pl"
                                            >
                                                <div className="w-6 h-6">
                                                    <WhatsappIcon
                                                        size={35}
                                                        round={true}
                                                    />
                                                </div>
                                            </WhatsappShareButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="my-6 mx-auto lg:w-1/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-8 sm:gap-12">
                        {allDatoCmsUsluga.edges.map(({ node }) => (
                            <Link
                                to={`/` + node.slug}
                                className="flex flex-col xl:flex-row items-center px-2 justify-start text-start"
                            >
                                <div className="group w-20 h-20 m-4 flex items-center justify-center overflow-hidden relative border-2 border-transparent shadow-lg shadow-yellow-600 bg-gradient-to-tr from-amber-500 to-amber-300 md:hover:border-yellow-500 group md:transition rounded-2xl md:hover:scale-[1.01] md:hover:shadow-xl md:hover:shadow-amber-500">
                                    <GatsbyImage
                                        className="w-4/5 h-4/5 object-cover object-center group-hover:scale-95 transition"
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
            </div>
            <div className="h-[200vh]" />
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
                    height: 64
                    width: 64
                    forceBlurhash: false
                )
            }
            seo {
                description
                title
            }
            descUsluga {
                title
                desc
                img {
                    alt
                    gatsbyImageData(height: 600, placeholder: NONE)
                    title
                }
            }
        }
        allDatoCmsUsluga {
            edges {
                node {
                    title
                    slug
                    img {
                        gatsbyImageData(
                            height: 64
                            width: 64
                            forceBlurhash: false
                            placeholder: NONE
                        )
                    }
                }
            }
        }
    }
`;
