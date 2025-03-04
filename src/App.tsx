import Marquee from "react-fast-marquee";
import "./App.css";
import LogoMarquee from "./components/LogoMarquee";

function App() {
    return (
        <>
            <div className="flex justify-center flex-col items-center min-h-screen">
                <div>
                    <h1>Our Client</h1>
                </div>
                <Marquee gradient={true} gradientColor="#242424" autoFill={true}>
                    <LogoMarquee />
                </Marquee>
            </div>
        </>
    );
}

export default App;
