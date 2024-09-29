import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: 0,
            fontSize: "16px",

            fontWeight: 500,
            lineHeight: "normal",
          },
          // icon: null,
          error: {
            icon: null,
            style: {
              borderLeft: "5px solid #CF777D",
              color: "var(--White, #FFF)",
              background: "rgba(235, 138, 145, 0.80)",
            },
          },
          success: {
            icon: null,
            style: {
              borderLeft: "5px solid var(--Verde-sombra, #529080)",
              background: "rgba(106, 191, 169, 0.80)",
              color: "var(--White, #FFF)",
            },
          },
        }}
      ></Toaster>
      <Component {...pageProps} />
    </>
  );
}
