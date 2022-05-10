import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Characters } from "./pages/Characters";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}
