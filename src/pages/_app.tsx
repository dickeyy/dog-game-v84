import "@/styles/globals.css";
import type { AppProps } from "next/app";
import posthog from "../lib/posthog";

export default function App({ Component, pageProps }: AppProps) {
    if (posthog) posthog;
    return <Component {...pageProps} />;
}
