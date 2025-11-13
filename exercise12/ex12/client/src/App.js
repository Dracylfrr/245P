import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import HomeView from "./HomeView";
import PerformanceView from "./PerformanceView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-container">
        <Nav />
        <div className="content">
          <Routes>
            <Route index element={<HomeView />} />
            <Route path="performance" element={<PerformanceView />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
