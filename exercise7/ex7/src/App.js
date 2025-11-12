import "./App.css";

import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />

      <div className="mainContent">
        <h1>Welcome to My React App</h1>
        <p>This is the main content area.</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
