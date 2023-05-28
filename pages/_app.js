import React from "react";
import "../public/globals.css";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
