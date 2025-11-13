import "./App.css";

// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import SecondDataView from "./SecondDataView";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />

        <Routes>
          <Route index element={<LandingView />} />
          <Route path="/second" element={<SecondDataView />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
