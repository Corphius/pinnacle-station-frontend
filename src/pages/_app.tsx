import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [showFooter, setShowFooter] = useState<boolean>(true);

  useEffect(() => {
    setShowFooter(true);
    if (pathname == '/') {
      setShowFooter(false);
    }

    console.log('Mudei', pathname);
  }, [pathname]);

  const renderCommonComponents = () => {
    if (showFooter) {
      return (
        <div>
          <>
            <header>
              <div id="logoHeader">
                <Image
                  src="/descoSymbol.png"
                  alt="Logo Descomplica"
                  width={42}
                  height={44.52}
                />
              </div>

              <div id="tabs">
                <div id="squadOption">
                  <Link href={'/squad-selection-page'}>
                    <span>Squads</span>
                  </Link>
                </div>
                <div id="tutorialsOption">
                  <span>Tutoriais</span>
                </div>
                <div id="trophiesOption">
                  <span>Sala de Troféus</span>
                </div>
              </div>

              <div id="userEmailButton">
                <div id="userEmail">
                  <div id="userEmailIcon">
                    <div id="userEmailEssential">
                      <Image
                        id="userEmailImage"
                        src="/userIcon.png"
                        alt="Ícone Usuário"
                        width={24}
                        height={24}
                      />
                      <div id="userEmailBoundingBox"></div>
                    </div>
                  </div>
                  <span>usuario@email.com</span>
                </div>
              </div>
            </header>
            <Component {...pageProps} />
          </>
          <footer>
            <p>
              Tem alguma sugestão ou dúvida? <a href="">Manda pra gente</a> 🔍
            </p>
          </footer>
        </div>
      );
    }

    return <Component {...pageProps} />;
  };

  return <>{renderCommonComponents()}</>;
}
