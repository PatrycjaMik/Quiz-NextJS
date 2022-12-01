import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Co wiesz o Marii Konopnickiej</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="robots" content="follow, index" />
      <meta
        name="description"
        content="Quiz o Marii Konopnickiej. Sprawdź się i wygraj radioodbiornik."
      />
      <link rel="canonical" href="/"></link>
      <meta
        name="keywords"
        content="quiz, maria konopnicka, nagroda, czwórka, polskieradio"
      />
      <link rel="shortcut icon" type="image/png" href="/images/faviconpr.png" />

      <meta property="og:title" content="Quiz o Marii Konopnickiej" />
      <meta property="og:url" content="/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/polskieRadioLogo.png" />
      <meta
        property="og:description"
        content="Quiz o Marii Konopnickiej. Sprawdź się i wygraj radioodbiornik."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content="Quiz o Marii Konopnickiej" />
      <meta name="twitter:description" content="Quiz o Marii Konopnickiej" />
      <meta name="twitter:image" content="/images/polskieRadioLogo.png" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/images/polskieRadioLogo.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="next-head-count" content="21" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap"
        rel="stylesheet"
      ></link>

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
