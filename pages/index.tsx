import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (

    <div className='container'>

      <Head>
        <title>Descomplication - A Plataforma de Onboarding da Descomplica</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <body>
        <div id='logo'>
          <Image src='/images/descoSymbol.png' alt='Logo Descomplica' width={76} height={76}/>
        </div>

        <div id='subtitle'>
          <p>VOCÊ CHEGOU AO TIME DESCOMPLICA.</p>
        </div>

        <div id='welcome'>
          <p>Boas vindas!</p>
        </div>

        <div id='loginbutton'>
          <button>
            <span id='content'>
              <Image src='/images/googleLogo.png' alt='Logo Google' width={14} height={14}/>
              <span>Entrar com o Google</span>
            </span>
          </button>
        </div>
      </body>

    </div>
  )
}
