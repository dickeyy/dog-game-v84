import Image from "next/image";
import { useEffect } from "react";

export default function Welcome() {
    // play background music even when the user is not interacting with the page
    useEffect(() => {
        setTimeout(() => {
            let audio = new Audio("/background.mp3");
            audio.loop = true;
            audio.play();
        }, 4000);
    }, []);

    return (
        <>
            <div className="flex flex-col items-start justify-center w-full">
                <h1 className="text-8xl">dog game v.84</h1>
                <p className="text-2xl mt-10 ml-20">press enter to begin</p>
            </div>

            <div className="flex flex-col items-start justify-center w-full">
                <Image alt="Dog" src="/dog.png" width={150} height={150} />
            </div>
        </>
    );
}
