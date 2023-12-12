import Image from "next/image";
import { Comic_Neue } from "next/font/google";
import { useState } from "react";
import Welcome from "@/comps/welcome";
import Playing from "@/comps/playing";

const comicSans = Comic_Neue({
    subsets: ["latin"],
    weight: "400"
});

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showBluescreen, setShowBluescreen] = useState(false);

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

    // randomly show bluescreen, but only if the game is being played
    if (isPlaying) {
        setTimeout(() => {
            // make a 1 in 10 chance of showing the bluescreen
            if (Math.random() < 0.1) {
                setShowBluescreen(true);
            }
        }, 10000);
    }

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-16 ${comicSans.className}`}>
            {showBluescreen && (
                <div className="w-screen h-screen absolute top-0 p-0 bg-blue-500">
                    <Image
                        alt="Bluescreen"
                        src="/bluescreen.jpg"
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                </div>
            )}

            {!showBluescreen && <>{isPlaying ? <Playing /> : <Welcome />}</>}
        </main>
    );
}
