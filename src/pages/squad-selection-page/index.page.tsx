import React from "react";
import Head from 'next/head'
import Image from 'next/image'

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
                <div id="selectSquad">
                    <p>Escolha a squad</p>
                </div>

                <div id="firstLine">
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                </div>

                <div id="secondLine">
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                </div>


                <div id="thirdLine">
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                    <div>
                        <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                    </div>
                </div>

            </body>

            <footer>
                <p>Tem alguma sugestão ou dúvida? <a href="">Manda pra gente 🔍</a></p>
            </footer>

        </div>
    )
}
