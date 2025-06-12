import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/NavBar/Hearder";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
