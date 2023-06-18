import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const ArticleCom = () => (
    <section className="flex flex-col lg:flex-row items-center space-y-5 justify-center px-6">
        <div className="w-full lg:w-1/2">
            <StaticImage quality={100} src="../../assets/x.jpg" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-start max-w-xl">
            <h2 className="title">
                Projektowanie i tworzenie stron internetowych <br />
                <span>| Warszawa | Wrocław | Siedlce |</span>
            </h2>
            <p className="pb-6">
                Jeśli szukasz profesjonalnego wykonawcy strony internetowej,
                który dostarczy Ci funkcjonalne i estetyczne rozwiązania, warto
                zwrócić uwagę na moją ofertę wykonania stron i sklepów
                internetowych. Jestem doświadczonym specjalistą, który od lat
                projektuje i wdrażają skuteczne strony internetowe dla klientów
                z różnych branż. Oferta jest kompleksowa, obejmuje
                projektowanie, wdrażanie, a także utrzymanie i wsparcie
                techniczne po zakończeniu projektu. Dzięki temu możesz mieć
                pewność, że Twoja strona internetowa będzie działać bezawaryjnie
                i zawsze będzie na bieżąco. Skorzystaj z poniższego przycisku,
                aby poznać cenę strony internetowej oraz wysłać zapytanie w
                sprawie oferty.
            </p>
            <Link to="/darmowa-wycena" className="blue-btn">
                Kalkulator wyceny strony internetowej
            </Link>
        </div>
    </section>
);

export default ArticleCom;
