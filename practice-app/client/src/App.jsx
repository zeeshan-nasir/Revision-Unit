import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GridItems from "./components/GridItems";
import NavbarFunc from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <NavbarFunc />
            <GridItems />
        </div>
    );
}

export default App;
