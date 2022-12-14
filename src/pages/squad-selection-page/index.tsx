import React from "react";
import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image';
import { squads } from "../squad-page";

export async function getStaticProps() {
    // const data = await fetch ('');
    // const todo = await data.json();

    return {
        props: {
            squads,
        }
    }

}

export default function SquadSelection({ squads }: any) {
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
                {squads.map((squad: any) => {
                    return (
                        <Link href={`/squad-page/${squad.id}`}>
                            <div className="squadCircle">
                                <Image src='/images/Ellipse.png' alt='Elipse' width={120} height={120} />
                            </div>
                        </Link>
                    )
                })}
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
