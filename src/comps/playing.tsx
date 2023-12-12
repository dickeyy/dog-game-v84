import Image from "next/image";
import { useEffect, useState } from "react";

export default function Playing() {
    const [dogX, setDogX] = useState(0);
    const [dogY, setDogY] = useState(0);

    const [ballX, setBallX] = useState(0);
    const [ballY, setBallY] = useState(0);

    const [score, setScore] = useState(0);

    const randomizeBall = () => {
        // randomize ball position to be within the screen
        setBallX(Math.random() * (window.innerWidth - 150));
        setBallY(Math.random() * (window.innerHeight - 150));
    };

    // on first render, randomize the ball position
    useEffect(() => {
        randomizeBall();
    }, []);

    const updateDogPosition = (event: any) => {
        // make the center of the dog image the mouse position
        setDogX(event.clientX - 75);
        setDogY(event.clientY - 75);
    };

    const handleMouseMove = (event: any) => {
        // update the dog position
        updateDogPosition(event);
    };

    // add event listener for mouse movement
    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", handleMouseMove);
    }

    // detect if the dog is touching the ball
    useEffect(() => {
        if (dogX + 150 > ballX && dogX < ballX + 75 && dogY + 150 > ballY && dogY < ballY + 75) {
            // if the dog is touching the ball, randomize the ball position and increase the score
            randomizeBall();
            setScore(score + 1);
            let audio = new Audio("/yeah.mp3");
            audio.play();
        }
    }, [dogX, dogY]);

    return (
        <>
            <div className="flex flex-col items-start justify-center w-full">
                <p className="text-2xl -mt-10 -ml-10">score: {score}</p>
            </div>
            <div className="flex flex-col items-start justify-center w-full">
                <Image
                    id="dog"
                    alt="Dog"
                    src="/dog.png"
                    width={150}
                    height={150}
                    style={{
                        position: "absolute",
                        left: dogX,
                        top: dogY,
                        zIndex: 10,
                        width: "auto"
                    }}
                />
                <Image
                    id="ball"
                    alt="Ball"
                    src="/ball.png"
                    width={75}
                    height={75}
                    style={{
                        position: "absolute",
                        left: ballX,
                        top: ballY
                    }}
                    className="transition-all duration-200 ease-in-out"
                />
            </div>
        </>
    );
}
