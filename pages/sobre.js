import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
      <div>
          <Head>
              <meta charSet="utf-8" />
              <meta name="robots" content="index, follow" />
              <meta name="description" content="Site Teste Next.js" />
              <meta name="author" content="Miguel - César" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <title>Welcome - Sobre</title>
          </Head>
        <Menu />


    Conteúdo da Página Sobre
        </div>
    )
  }
  
  export default Home;