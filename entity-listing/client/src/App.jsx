import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarFunc from "./components/Navbar";
import MainPage from "./components/MainPage";

function App() {
    return (
        <div className="App">
            <NavbarFunc />
            <MainPage />
        </div>
    );
}

export default App;
