import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(2);

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
            );
            const data = await res.json();
            setItems(data);
        };

        getComments();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
        );
        const data = await res.json();
        return data;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);

        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
            sethasMore(false);
        }

        setpage(page + 1);
    };

    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader />}
        >
            <div className="mainContainer">
                {items.map((item) => {
                    return (
                        <h5 key={item.id} className="">
                            Masai Student {item.id}
                        </h5>
                    );
                })}
            </div>
        </InfiniteScroll>
    );
}

export default App;
