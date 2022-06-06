import "./App.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "asos2.p.rapidapi.com",
                "X-RapidAPI-Key":
                    "3ccd768584msh7519e30866630cep18662bjsn1fab76c33d69",
            },
        };

        fetch(
            "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=500&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
            options
        )
            .then((response) => response.json())
            .then((response) => console.log(response))
            .catch((err) => console.error(err));
    }, []);

    return <div className="App"></div>;
}

export default App;
