import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ParticlesBackground from "./components/ParticlesBackground";

const App = () => (
    <BrowserRouter>
        <ParticlesBackground />
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    </BrowserRouter>
);

export default App;
