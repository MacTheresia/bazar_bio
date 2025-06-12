import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/NavBar/Hearder";
import HomePage from "./pages/home/Home";
import AuthScreen from "./pages/auth/Auth";
import AccountPage from './pages/account/AccountPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/mon-compte" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;