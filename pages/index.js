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
              <title>Welcome - Rome</title>
          </Head>
           <Menu />
           <script src="custom.js"></script>
           <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        </div>
    )
  }
  
  export default Home;