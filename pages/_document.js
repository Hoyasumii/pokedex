import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

import * as Component from "../public/components";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Component.Navbar />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
