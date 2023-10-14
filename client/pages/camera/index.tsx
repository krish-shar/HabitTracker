import React, {useEffect, useState} from "react";

const Cam = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); // simulate loading
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-800">

            <div className="flex flex-col items-center">

                <h1 className="text-white text-4xl font-bold p-4">Camera</h1>

                <div className='flex justify-center'>
                    <img
                        src="http://localhost:8080/video_feed"
                        alt="Video"
                    />
                </div>

            </div>

        </div>

    );
}

export default Cam;