import '../styles/app.css'
import { useMemo, useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    document.title="Can Nakliyat Ankara"
  });

  return (
    <Component {...pageProps} />
  )
}

export default MyApp;
