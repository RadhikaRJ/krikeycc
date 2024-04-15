import "./App.css";
import WebPage from "../src/components/AuthorsWebPage/WebPage";
import NavBar from "../src/components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="rectangle-container">
        <WebPage />
      </div>
    </div>
  );
}

export default App;
