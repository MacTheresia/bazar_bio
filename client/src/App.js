import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/NavBar/Hearder";
import HomePage from "./pages/home/Home";
import AuthScreen from "./pages/auth/Auth";
import AccountPage from './pages/account/AccountPage';
// import HorizontalLabelPositionBelowStepper from "./pages/stepper/Stepper";
import ShoppingScreen from "./components/shopping/Shopping";
// import CommandeScreen from "./pages/commande/Commande";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthScreen />} />
        {/* <Route path="/panier" element={<HorizontalLabelPositionBelowStepper />} /> */}
        
        <Route path="/panier" element={<ShoppingScreen />} />
        <Route path="/mon-compte" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;