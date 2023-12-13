import Image from "next/image";
import { useEffect } from "react";

export default function Welcome() {
    const bark = () => {
        let audio = new Audio("/bark.mp3");
        audio.play();
    };

    return (
        <>
            <div className="flex flex-col items-start justify-center w-full">
                <h1
                    className="text-8xl cursor-pointer"
                    onClick={() => {
                        bark();
                    }}
                >
                    dog game v.84
                </h1>
                <p className="text-2xl mt-10 ml-20">press enter to begin</p>
            </div>

            <div className="flex flex-col items-start justify-center w-full">
                <Image alt="Dog" src="/dog.png" width={150} height={150} />
            </div>
        </>
    );
}
