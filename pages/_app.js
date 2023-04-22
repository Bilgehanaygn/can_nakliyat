import Head from "next/head";
import "../styles/app.css";
import { useMemo, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   document.title = "Can Nakliyat Ankara";
  //   document.meta;
  // });

  return (
    <div>
      <Head>
        <title>Can Nakliyat Ankara</title>
        <meta
          name="title"
          content="Can Nakliyat Ankara | Ankara'da 1 Numaralı Nakliyeciniz"
        />
        <meta
          name="description"
          content="Can Nakliyat Ankara 25 yıllık tecrübesiyle başta Ankara olmak üzere tüm Türkiye'ye hizmet veriyor."
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
