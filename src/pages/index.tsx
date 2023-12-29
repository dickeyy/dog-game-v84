import { Comic_Neue } from "next/font/google";
import { useState } from "react";
import Welcome from "@/comps/welcome";
import Playing from "@/comps/playing";
import Head from "next/head";

const comicSans = Comic_Neue({
    subsets: ["latin"],
    weight: "400"
});

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleKeyPress = (event: any) => {
        // if enter is pressed, start the game
        if (event.key === "Enter") {
            setIsPlaying(true);
        }
    };

    // add event listener for keypresses
    if (typeof window !== "undefined") {
        window.addEventListener("keydown", handleKeyPress);
    }

    setTimeout(() => {
        if (document) {
            let audio = document.getElementById("background_audio") as HTMLAudioElement;
            if (audio) {
                audio.play();
            }
        }
    }, 5000);

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-16 ${comicSans.className}`}>
            <Head>
                <title>dog game v.84</title>
                <link rel="icon" href="/dog.png" />
            </Head>

            <audio id="background_audio" src="/background.mp3" autoPlay loop />
            {isPlaying ? <Playing /> : <Welcome />}
        </main>
    );
}
