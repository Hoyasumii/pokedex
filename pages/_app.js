import React from "react";
import Head from "next/head";

import "../public/styles/globals.css";
import "../public/styles/pokedex-styles.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Pokédex</title>
				<link rel="icon" href="/favicon.ico" /> 
			</Head>
			<Component {...pageProps} />
		</>
	);
}
