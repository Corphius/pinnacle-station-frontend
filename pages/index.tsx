import Head from 'next/head'
import React from "react"
import descoSymbol from "../images/descoSymbol.svg"
import googleLogo from "../images/googleLogo.png"

export default function Home() {
  return (

    <div className="container">

      <Head>
        <title>Descomplication - A Plataforma de Onboarding da Descomplica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              <img src={googleLogo} alt="Logo Google" />
              <span>Entrar com o Google</span>
            </span>
          </button>
        </div>
      </body>

    </div>
  )
}
