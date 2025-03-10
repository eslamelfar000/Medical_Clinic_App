import Reac, { useEffect } from 'react'

import { useLocation } from "react-router-dom";


function ScrollToUp() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0, "smooth");
    }, [location]);
    return (
        <div>

        </div>
    )
}

export default ScrollToUp


