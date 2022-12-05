import React from "react";
import Head from 'next/head'
import descoSymbol from '../images/descoSymbol.png'
import userIcon from '../images/userIcon.png'

export default function SquadSelection() {
    return (

        <div className="container">

            <Head>
                <title>Seleção de Squad</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div id="logoHeader">
                    <img src={descoSymbol} alt='Logo Descomplica' />
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
                        <img src={userIcon} alt='Ícone Usuário' />
                        <span>usuario@email.com</span>
                    </div>
                </div>
            </header>

            <body>
                <div id="logo">
                    <img src={descoSymbol} />
                </div>

                <div id="subtitle">
                    <p>VOCÊ CHEGOU AO TIME DESCOMPLICA.</p>
                </div>

                <div id="welcome">
                    <p>Boas vindas!</p>
                </div>

                <div id="loginbutton">
                    <button>
                        <span id='content'>
                            <img alt="Logo Google" />
                            <span>Entrar com o Google</span>
                        </span>
                    </button>
                </div>
            </body>

        </div>
    )
}
