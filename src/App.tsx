import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Characters } from "./pages/Characters";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}
