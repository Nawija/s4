import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import LiveSquares from "../components/liveSquares";

import { CardCom, ServiceCom } from "../components/index";

const IndexPage = () => {
    return (
        <Layout>
            <div className="relative flex-center flex-col z-0">
                <div className="relative h-72 md:h-96 w-full -z-10">
                    <LiveSquares />
                    <div className="relative h-full w-full -z-10">
                        <div className="bg-gradient-to-tr from-blue-800 to-sky-500 h-full w-full -z-10" />
                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl sm:text-4xl md:text-6xl lg:text-8xl w-max py-6 drop-shadow-lg text-white px-3">
                            Doskonałe Strony
                        </p>
                    </div>
                </div>
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
                <section className="flex flex-col lg:flex-row items-center space-y-5 justify-center px-6">
                    <div className="w-full lg:w-1/2">
                        <StaticImage quality={100} src="../assets/x.jpg" />
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-start max-w-xl">
                        <h2 className="title">
                            Projektowanie i tworzenie stron internetowych <br />
                            <span>| Warszawa | Wrocław | Siedlce |</span>
                        </h2>
                        <p className="pb-6">
                            Jeśli szukasz profesjonalnego wykonawcy strony
                            internetowej, który dostarczy Ci funkcjonalne i
                            estetyczne rozwiązania, warto zwrócić uwagę na moją
                            ofertę wykonania stron i sklepów internetowych.
                            Jestem doświadczonym specjalistą, który od lat
                            projektuje i wdrażają skuteczne strony internetowe
                            dla klientów z różnych branż. Oferta jest
                            kompleksowa, obejmuje projektowanie, wdrażanie, a
                            także utrzymanie i wsparcie techniczne po
                            zakończeniu projektu. Dzięki temu możesz mieć
                            pewność, że Twoja strona internetowa będzie działać
                            bezawaryjnie i zawsze będzie na bieżąco. Skorzystaj
                            z poniższego przycisku, aby poznać cenę strony
                            internetowej oraz wysłać zapytanie w sprawie oferty.
                        </p>
                        <Link to="/darmowa-wycena" className="blue-btn">
                            Kalkulator wyceny strony internetowej
                        </Link>
                    </div>
                </section>
            </div>

            <ServiceCom />

            <StaticImage
                quality={100}
                src="../assets/r.jpg"
                alt="r"
                placeholder="domainColor"
            />

            <div className="h-[100vh]" />
        </Layout>
    );
};

export const Head = () => <Seo title="Strony Internetowe" description="" />;

export default IndexPage;
