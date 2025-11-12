import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import SidebarAndMain from "./SidebarAndMain"; // OR Sidebar.js if combined

function App() {
  return (
    <div className="App">
      <Header />
      <SidebarAndMain />
      <Footer />
    </div>
  );
}

export default App;
