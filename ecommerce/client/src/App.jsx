import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import UserCreate from "./components/UserCreate";
import Product from "./components/Product";
import Brand from "./components/Brand";
import Category from "./components/Category";
import Users from "./components/Users";

function App() {
    return (
        <div className="App">
            <NavbarComp />
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/user"} element={<Users />}></Route>
                <Route path={"/user/create"} element={<UserCreate />}></Route>
                <Route path={"/product"} element={<Product />}></Route>
                <Route path={"/brand"} element={<Brand />}></Route>
                <Route path={"/category"} element={<Category />}></Route>
            </Routes>
        </div>
    );
}

export default App;
