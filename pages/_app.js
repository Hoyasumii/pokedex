import React from "react";
import Head from "next/head";
import "../public/globals.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Pokédex</title>
				<link rel="icon" href="/favicon.ico" /> 
			</Head>
			<Component {...pageProps} />;
		</>
	);
}
