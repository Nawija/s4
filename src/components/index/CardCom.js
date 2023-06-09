import React from "react";

const CardCom = () => (
    <section className="container max-w-screen-xl -mt-10 lg:-mt-20 mb-6 md:mb-12 mx-auto">
        <div className=" text-gray-800 text-center">
            <div className="flex flex-col md:flex-row flex-wrap mx-auto w-full md:items-stretch items-center justify-center">
                <div className="lg:w-96 md:w-80 w-4/5 mb-4 mx-2 lg:mx-3 px-4 rounded-lg shadow-xl bg-white/60 backdrop-blur-xl ">
                    <div className="flex flex-col justify-center">
                        <div className="p-4 w-max mx-auto bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 rounded-full shadow-lg -mt-8">
                            <svg
                                className="w-8 h-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="px-2 py-6 sm:px-6">
                        <h2 className="text-lg font-bold mb-4">
                            Szybkość działania
                        </h2>
                        <p>
                            Dzięki wykorzystaniu technologii GatsbyJS tworzymy
                            strony internetowe, które działają bardzo szybko.
                            Nasze strony ładują się w mgnieniu oka, co przekłada
                            się na pozytywne doświadczenie użytkownika i lepsze
                            wyniki w wyszukiwarkach.
                        </p>
                    </div>
                </div>

                <div className="lg:w-96 md:w-80 w-4/5 mb-4 mx-2 lg:mx-3 px-4 rounded-lg shadow-xl mt-6 md:mt-0 bg-white/60 backdrop-blur-xl ">
                    <div className="flex flex-col justify-center">
                        <div className="p-4 w-max mx-auto bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 rounded-full shadow-lg -mt-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 scale-110"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="white"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                                <path d="M14 16h-4v-8h4"></path>
                                <path d="M11 12h2"></path>
                                <path d="M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="px-2 py-6 sm:px-6">
                        <h2 className="text-lg font-bold mb-4">
                            Przyjazna SEO
                        </h2>
                        <p>
                            Dla klientów posiadających strony internetowe
                            wsparcie 24/7 to kluczowe rozwiązanie. Dzięki temu
                            klienci otrzymują szybką i profesjonalną pomoc w
                            przypadku problemów z działaniem strony internetowej
                        </p>
                    </div>
                </div>

                <div className="lg:w-96 md:w-80 w-4/5 mb-4 mx-2 lg:mx-3 px-4 rounded-lg shadow-xl mt-6 md:mt-0 bg-white/60 backdrop-blur-xl ">
                    <div className="flex flex-col justify-center">
                        <div className="p-4 w-max mx-auto bg-gradient-to-t from-amber-500 to-amber-300 shadow-amber-600 rounded-full shadow-lg -mt-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 scale-125"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path
                                    d="M18 4a1 1 0 0 1 .783 .378l.074 .108l3 5a1 1 0 0 1 -.032 1.078l-.08 .103l-8.53 9.533a1.7 1.7 0 0 1 -1.215 .51c-.4 0 -.785 -.14 -1.11 -.417l-.135 -.126l-8.5 -9.5a1 1 0 0 1 -.172 -1.067l.06 -.115l3.013 -5.022l.064 -.09a.982 .982 0 0 1 .155 -.154l.089 -.064l.088 -.05l.05 -.023l.06 -.025l.109 -.032l.112 -.02l.117 -.005h12zm-8.886 3.943a1 1 0 0 0 -1.371 .343l-.6 1l-.06 .116a1 1 0 0 0 .177 1.07l2 2.2l.09 .088a1 1 0 0 0 1.323 -.02l.087 -.09a1 1 0 0 0 -.02 -1.323l-1.501 -1.65l.218 -.363l.055 -.103a1 1 0 0 0 -.398 -1.268z"
                                    stroke-width="0"
                                    fill="white"
                                ></path>
                            </svg>
                        </div>

                        <div className="px-2 py-6 sm:px-6">
                            <h2 className="text-lg font-bold mb-4">
                                Technologia Premium
                            </h2>
                            <p>
                                Nowoczesne technologie oferują wiele korzyści
                                dla stron internetowych. Pozwalają one na łatwe
                                dostosowanie SEO i pozycjonowania w
                                wyszukiwarkach, a także na poprawę jakości
                                użytkowania dla odwiedzających.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CardCom;
