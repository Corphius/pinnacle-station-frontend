import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SquadPageOne() {
    return (
        <div className="container">
            <Head>
                <title>Squad</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="aboutSquad">
                <p>SOBRE A SQUAD</p>
            </div>

            <div id="squadName">
                <p>Payments</p>
            </div>

            <div id="squadInfo">
                <p>Contexto sobre as principais funções e áreas de foco da squad.</p>
            </div>

            <div id="slack">
                <p>Slack</p>
            </div>

            <div id="slackInfo">
                <p>#team-payments</p>
                <p>@team-payments</p>
            </div>

            <div id="goToTutorialButton">
                <Link href={'/tutorial-page'}>
                    <button>
                        <span id="goToTutorialButtonContent">
                            <span>Acessar tutoriais</span>
                        </span>
                    </button>
                </Link>
            </div>

            <div id="leaders">
                <p>Líderes</p>
            </div>

            <div id="lineOne"></div>

            <div id="techLead">
                <p>Tech Lead | Ítalo Nascimento</p>
            </div>

            <div id="productManager">
                <p>Product Manager | Mônica Wagner</p>
            </div>

            <div id="members">
                <p>Integrantes</p>
            </div>

            <div id="lineTwo"></div>

            <div id="membersList">
                <p>Software Engineer Jr | Juan Junger</p>
                <p>Software Engineer Pl | Eduardo Neto</p>
                <p>Software Engineer Sr | Vinícius Trampusch</p>
                <p>Software Engineer Sr | Alexandre Tondello</p>
                <p>Product Designer | Isabela Caserta</p>
                <p>Product Designer | Beatriz Fortes</p>
            </div>
        </div>
    );
}