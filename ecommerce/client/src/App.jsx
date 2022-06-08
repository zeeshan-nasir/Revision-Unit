import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import User from "./components/User";
import Product from "./components/Product";
import Brand from "./components/Brand";

function App() {
    return (
        <div className="App">
            <NavbarComp />
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/user"} element={<User />}></Route>
                <Route path={"/product"} element={<Product />}></Route>
                <Route path={"/brand"} element={<Brand />}></Route>
            </Routes>
        </div>
    );
}

export default App;
