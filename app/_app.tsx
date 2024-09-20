import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../app/layout'; 

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noLayoutPages = ['/login'];
  const isNoLayout = noLayoutPages.includes(router.pathname);
  return (
    <>
      {isNoLayout ? (
     <Component {...pageProps}/>
      ) : (
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      )}
    </>
  );
}

export default MyApp;
