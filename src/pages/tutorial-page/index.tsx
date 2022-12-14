import React from "react";
import Head from 'next/head'

export default function TutorialPage() {
    return (

        <div className="container">

            <Head>
                <title>Tutoriais</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="tutorials">
                <p>Tutoriais</p>
            </div>

            <div id="squadName">
                <p>Payments</p>
            </div>

            <div id="tutorialDescription">
                <p>Descrição do que a squad faz, sobre as linguagens de programação que usam e como cada uma é aplicada.</p>
            </div>

            <div id="progressBar">
                <div id="progressBarBar">
                    <div id="progressBarProgress"></div>
                </div>
                <div id="progressBarRow">
                    <div id="progressBarDescription">
                        <p>Conhecimento sobre a squad</p>
                    </div>
                    <div id="progressBarProgressPercentage">
                        <p>75%</p>
                    </div>
                </div>
            </div>

            <div id="lineThree"></div>

            <div id="tutorialContent">
                <div id="tutorialContentSection">
                    <div id="sectionTitle">
                        <h2>Conteúdos</h2>
                    </div>
                    <div id="contentList">
                        <div id="tutorialVideos">
                            <div className="accordion">
                                <div className="accordionContent">
                                    <div className="accordionContentInfo">
                                        <div className="accordionTitle">
                                            <p>Vídeos</p>
                                        </div>
                                        <div className="accordionDescription">
                                            <p>14 vídeos</p>
                                        </div>
                                    </div>
                                    <div className="accordionStatus">
                                        <div className="statusCompleted">
                                            <p>Concluído</p>
                                        </div>
                                        <div className="statusCheck">
                                            <div className="statusCompletedIcon">
                                                <p>✓</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="accordionButton">
                                    <div className="accordionButtonBox">
                                        <span>Mostrar todos</span>
                                    </div>
                                    <div className="accordionButtonArrow">
                                        <p>˅</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div id="tutorialArticles">
                            <div className="accordion">
                                <div className="accordionContent">
                                    <div className="accordionContentInfo">
                                        <div className="accordionTitle">
                                            <p>Artigos</p>
                                        </div>
                                        <div className="accordionDescription">
                                            <p>16 itens</p>
                                        </div>
                                    </div>
                                    <div className="accordionStatus">
                                        <div className="statusCompleted">
                                            <p>Concluído</p>
                                        </div>
                                        <div className="statusCheck">
                                            <div className="statusCompletedIcon">
                                                <p>✓</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="accordionButton">
                                    <div className="accordionButtonBox">
                                        <span>Mostrar todos</span>
                                    </div>
                                    <div className="accordionButtonArrow">
                                        <p>˅</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div id="tutorialExtraMaterial">
                            <div className="accordion">
                                <div className="accordionContent">
                                    <div className="accordionContentInfo">
                                        <div className="accordionTitle">
                                            <p>Materiais de apoio</p>
                                        </div>
                                        <div className="accordionDescription">
                                            <p>2 itens</p>
                                        </div>
                                    </div>
                                    <div className="accordionStatus">
                                        <div className="statusCompleted">
                                            <p>Concluído</p>
                                        </div>
                                        <div className="statusCheck">
                                            <div className="statusCompletedIcon">
                                                <p>✓</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="accordionButton">
                                    <div className="accordionButtonBox">
                                        <span>Mostrar todos</span>
                                    </div>
                                    <div className="accordionButtonArrow">
                                        <p>˅</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div id="tutorialExercises">
                            <div className="accordion">
                                <div className="accordionContent">
                                    <div className="accordionContentInfo">
                                        <div className="accordionTitle">
                                            <p>Exercícios</p>
                                        </div>
                                    </div>
                                </div>
                                <button id="exercisesButton">
                                    <div id="exercisesButtonBox">
                                        <div id="exercisesButtonContent">
                                            <span>Continuar exercícios</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}