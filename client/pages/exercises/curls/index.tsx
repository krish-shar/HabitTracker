import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router';


function Excercises() { // get message from server
    const [message, setMessage] = useState("Waiting for server...");

    // use setInterval() to make an API call every half a second
    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8080/api/curl_rep_count').then(res => res.json()).then(data => {
                setMessage(data.rep);
            })
        }, 500);

        return() => clearInterval(interval);
    }, [])

    const resetReps = async () => {
        await fetch('http://localhost:8080/api/reset_reps');
        setMessage("0");
    };

    const switchArms = async () => {
        await fetch('http://localhost:8080/api/switch_arm');
    };

    const subtleText = "Look face your body slightly towards the right and start curling.";

    return (
        <>
            <div className="bg-gray-800 flex flex-col items-center p-4">
                <h1 className="text-white text-4xl font-bold">Camera</h1>
                <p className="text-white text-xl">Rep count: {message}</p>
                <div className='flex justify-center border border-black rounded-lg'>
                    <img src="http://localhost:8080/video_feed" alt="Video"/>
                </div>

                <p className="text-white text-sm italic">
                    {subtleText}</p>
                <div className="flex flex-row justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={resetReps}>Reset Reps</button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
                        onClick={switchArms}>Switch Arms</button>
                </div>


            </div>
        </>
    )
}

export default Excercises
