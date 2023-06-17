import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ServiceCom = () => {
    const data = useStaticQuery(
        graphql`
            {
                allDatoCmsUsluga(sort: { position: ASC }) {
                    edges {
                        node {
                            id
                            title
                            desc
                            slug
                            img {
                                alt
                                title
                                gatsbyImageData(
                                    height: 70
                                    width: 70
                                    placeholder: NONE
                                )
                            }
                        }
                    }
                }
            }
        `
    );
    return (
        <section className="bg-[#D6F0FE] py-12 px-6">
            <h2 className="title">Usługi</h2>
            <p className="mb-6">Przedstawiam zakres moich usług:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 py-6 max-w-screen-xl mx-auto">
                {data.allDatoCmsUsluga.edges.map(({ node }) => (
                    <Link
                        to={node.slug}
                        key={node.id}
                        className="px-3 py-6 border-2 border-gray-400 md:hover:bg-white md:hover:border-blue-400 group md:transition rounded-md md:hover:scale-[1.01] md:hover:shadow-xl"
                    >
                        <GatsbyImage
                            image={getImage(node.img)}
                            alt={node.img.alt}
                            title={node.img.title}
                        />
                        <h2 className="title-sm group-hover:text-blue-500 md:transition-colors">
                            {node.title}
                        </h2>
                        <p>{node.desc}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ServiceCom;
