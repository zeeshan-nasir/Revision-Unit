import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import UserCreate from "./components/UserCreate";
import Users from "./components/Users";
import User from "./components/User";
import UserEdit from "./components/UserEdit";
import AddAddress from "./components/AddAddress";
import Products from "./components/Products";
import Brands from "./components/Brands";
import Categories from "./components/Categories";

function App() {
    return (
        <div className="App">
            <NavbarComp />
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/users"} element={<Users />}></Route>
                <Route path={"/user/:id"} element={<User />}></Route>
                <Route path={"/user/create"} element={<UserCreate />}></Route>
                <Route path={"/user/:id/edit"} element={<UserEdit />}></Route>
                <Route
                    path={"/user/:id/addresses/create"}
                    element={<AddAddress />}
                ></Route>
                <Route path={"/products"} element={<Products />}></Route>
                <Route path={"/brands"} element={<Brands />}></Route>
                <Route path={"/categories"} element={<Categories />}></Route>
            </Routes>
        </div>
    );
}

export default App;
