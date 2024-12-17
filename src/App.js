import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
function App() {
  return (
    <>
      <Navbar about={1} />
      <div className="container my-3">
        {/* <TextForm title=""/> */}
        <About />
      </div>
    </>
  );
}

export default App;
