import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <ParallaxProvider>
        <AnimatePresence>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </ParallaxProvider>
    </div>
  );
}

export default MyApp;
