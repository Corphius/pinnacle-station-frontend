import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Squad } from '../../models/squad/squad.model';

export const squads = [
    {
        id: '1',
        name: 'xp-ug',
        product_manager: 'fulano da silva',
        tech_manager: 'ciclano da silva',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet magna et neque maximus ultricies. Donec viverra sapien risus. Sed euismod aliquam nunc, dignissim ultricies magna. Vivamus fringilla est sit amet rhoncus lobortis. Suspendisse fermentum maximus mauris, in consectetur dui molestie eu. Maecenas posuere urna ut diam aliquam, nec bibendum urna semper. Phasellus sit amet diam at dolor interdum pharetra eget vitae nisl. Aenean in urna velit. Donec consequat, lorem quis varius imperdiet, nulla purus pellentesque dolor, interdum pulvinar justo quam vel urna. Etiam porttitor laoreet libero at bibendum.',
        members: ['fulano', 'ciclano', 'beltrano'],
    },
    {
        id: '2',
        name: 'xp-ug',
        product_manager: 'jorgin cria',
        tech_manager: 'cria do jorgin',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet magna et neque maximus ultricies. Donec viverra sapien risus. Sed euismod aliquam nunc, dignissim ultricies magna. Vivamus fringilla est sit amet rhoncus lobortis. Suspendisse fermentum maximus mauris, in consectetur dui molestie eu. Maecenas posuere urna ut diam aliquam, nec bibendum urna semper. Phasellus sit amet diam at dolor interdum pharetra eget vitae nisl. Aenean in urna velit. Donec consequat, lorem quis varius imperdiet, nulla purus pellentesque dolor, interdum pulvinar justo quam vel urna. Etiam porttitor laoreet libero at bibendum.',
        members: ['fulano', 'ciclano', 'beltrano'],
    },
    {
        id: '3',
        name: 'xp-ug',
        product_manager: 'chuvisco',
        tech_manager: 'Elena',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet magna et neque maximus ultricies. Donec viverra sapien risus. Sed euismod aliquam nunc, dignissim ultricies magna. Vivamus fringilla est sit amet rhoncus lobortis. Suspendisse fermentum maximus mauris, in consectetur dui molestie eu. Maecenas posuere urna ut diam aliquam, nec bibendum urna semper. Phasellus sit amet diam at dolor interdum pharetra eget vitae nisl. Aenean in urna velit. Donec consequat, lorem quis varius imperdiet, nulla purus pellentesque dolor, interdum pulvinar justo quam vel urna. Etiam porttitor laoreet libero at bibendum.',
        members: ['fulano', 'ciclano', 'beltrano'],
    },
];

export async function getStaticProps() {
    //   const data = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    //   const todo = await data.json();

    return {
        props: {
            squads,
        },
    };
}

export default function SquadPage({ squads }: any) {
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
                <button>
                    <span id="goToTutorialButtonContent">
                        <span>Acessar tutoriais</span>
                    </span>
                </button>
            </div>

            <div id="leaders">
                <p>Líderes</p>
            </div>

            <div id="lineOne"></div>

            <div id="techLead">
                <p>Tech Lead | Nome Sobrenome</p>
            </div>

            <div id="productManager">
                <p>Product Manager | Nome Sobrenome</p>
            </div>

            <div id="members">
                <p>Integrantes</p>
            </div>

            <div id="lineTwo"></div>

            <div id="membersList">
                <p>Software Engineer Jr | Nome Sobrenome</p>
                <p>Software Engineer Pl | Nome Sobrenome</p>
                <p>Software Engineer Sr | Nome Sobrenome</p>
                <p>Product Designer Jr | Nome Sobrenome</p>
                <p>Product Designer Pl | Nome Sobrenome</p>
            </div>
            <ul style={{ marginTop: '400px' }}>
                {squads.map((el: any) => {
                    return (
                        <Link href={`/squad-page/${el.id}`} key={el.id}>
                            <li style={{ cursor: 'pointer', color: '#fff' }}>
                                {el.tech_manager}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}