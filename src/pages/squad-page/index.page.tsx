import React from "react";
import Head from 'next/head'
import Image from 'next/image'

export default function SquadPage() {
    return (

        <div className="container">

            <Head>
                <title>Squad</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div id="logoHeader">
                    <Image src='/images/descoSymbol.png' alt='Logo Descomplica' width={42} height={44.52} />
                </div>

                <div id='tabs'>
                    <div id='squadOption'>
                        <span>Squads</span>
                    </div>
                    <div id='tutorialsOption'>
                        <span>Tutoriais</span>
                    </div>
                    <div id='trophiesOption'>
                        <span>Sala de Troféus</span>
                    </div>
                </div>

                <div id='userEmailButton'>
                    <div id='userEmail'>
                        <Image src='/images/userIcon.png' alt='Ícone Usuário' width={24} height={24} />
                        <span>usuario@email.com</span>
                    </div>
                </div>
            </header>

            <body>
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

                <div id='goToTutorialButton'>
                    <button>
                        <span id='goToTutorialButtonContent'>
                            <span>Acessar tutoriais</span>
                        </span>
                    </button>
                </div>

                <div id="leaders">
                    <p>Líderes</p>
                </div>

                <div id="lineOne">
                </div>

                <div id="techLead">
                    <p>Tech Lead | Nome Sobrenome</p>
                </div>

                <div id="productManager">
                    <p>Product Manager | Nome Sobrenome</p>
                </div>

                <div id="members">
                    <p>Integrantes</p>
                </div>

                <div id="lineTwo">
                </div>

                <div id="membersList">
                    <p>Software Engineer Jr | Nome Sobrenome</p>
                    <p>Software Engineer Pl | Nome Sobrenome</p>
                    <p>Software Engineer Sr | Nome Sobrenome</p>
                    <p>Product Designer Jr | Nome Sobrenome</p>
                    <p>Product Designer Pl | Nome Sobrenome</p>
                </div>

            </body>

            <footer>
                <p>Tem alguma sugestão ou dúvida? <a href="">Manda pra gente 🔍</a></p>
            </footer>

        </div>
    )
}