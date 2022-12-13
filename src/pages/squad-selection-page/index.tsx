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

            <div id="selectSquad">
                <p>Escolha a squad</p>
            </div>

            <div id="firstLine">
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
            </div>

            <div id="secondLine">
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
            </div>


            <div id="thirdLine">
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
                <div className="squadCircle">
                    <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                </div>
            </div>

        </div>
    )
}
