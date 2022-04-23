import React, { useEffect, useState } from "react";
import "./Loading.scss";

const Loading = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.title = "Rik den Breejen | Loading";
        const timeout = setTimeout(() => setShow(true), 30);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main className="flex flex-1 items-center justify-center">
            {show && <div className="loader"></div>}
        </main>
    );
};

export default Loading;