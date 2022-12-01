import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Co wiesz o Marii Konopnickiej</title>
      <meta charset="UTF-8" />
      <meta
        name="description"
        content="Quiz o Marii Konopnickiej. Sprawdź się i wygraj radioodbiornik."
      />
      <meta name="keywords" content="quiz, maria konopnicka, nagroda" />
      <link rel="shortcut icon" href="/images/favicon.jpg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
