import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/NavBar/Hearder";
import HomePage from "./pages/home/Home";
import AuthScreen from "./pages/auth/Auth";
import ShoppingScreen from "./components/shopping/Shopping";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/panier" element={<ShoppingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;