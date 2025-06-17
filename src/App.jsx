import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinceraStudioLanding from "./SinceraStudioLanding";

import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <div className="bg-neutral-900 text-white font-sans min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<SinceraStudioLanding />} />
            
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

