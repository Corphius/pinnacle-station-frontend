import Link from 'next/link';
// import { squads } from '.';
// export async function getStaticProps(context: any) {
//     const { params } = context;
//     // const data = await fetch(
//     //   `https://pinnacle-lb-prod-970491116.us-east-1.elb.amazonaws.com`
//     // );
//     // const todo = await data.json();

//     const squad = squads[params.squadId - 1];

//     return {
//         props: {
//             squad,
//         },
//     };
// }

// export async function getStaticPaths() {
//     // const res = await fetch(`https://pinnacle-lb-prod-970491116.us-east-1.elb.amazonaws.com`);

//     // const data = (await res.json()) || [];
//     const data = squads;

//     const paths = data?.map((squad: any) => {
//         return {
//             params: {
//                 squadId: `${squad.id}`,
//             },
//         };
//     });

//     return {
//         paths,
//         fallback: false,
//     };
// }

// export default function Squad({ squad }: any) {
//     return (
//         <div
//             style={{
//                 background: 'red',
//                 color: '#fff',
//                 marginTop: '500px',
//                 textAlign: 'center',
//             }}
//         >
//             <Link href={'/squad-page/'}>Voltar</Link>
//             {squad.product_manager}
//         </div>
//     );
// }