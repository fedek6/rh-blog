import { Html, Head, Main, NextScript } from "next/document";
import { bodyClasses } from "@/config/theme";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Public+Sans:ital@0;1&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className={bodyClasses.join(" ")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
