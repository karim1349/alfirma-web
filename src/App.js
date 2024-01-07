
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import PrivacyDuodoku from './pages/Duodoku/Privacy';
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        // Create cursor effect element
        const cursorEffect = document.createElement("div");
        cursorEffect.classList.add("cursor-effect");
        document.body.appendChild(cursorEffect);

        // Function to move the effect with cursor
        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            cursorEffect.style.left = `${clientX}px`;
            cursorEffect.style.top = `${clientY}px`;
        };

        // Event listener for mouse movement
        window.addEventListener("mousemove", moveCursor);

        // Cleanup function
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeChild(cursorEffect);
        };
    }, []);

    return (
        <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/duodoku/privacy" element={<PrivacyDuodoku />} />
          </Routes>
        </HashRouter>
        </>
    )
}

export default App