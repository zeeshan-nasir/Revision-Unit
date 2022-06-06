import React, { useEffect, useState } from "react";
import GridItems from "./GridItems";
import SortAndFilter from "./SortAndFilter";
import { Pagination } from "react-bootstrap";

const MainPage = () => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState([]);

    const getData = async () => {
        let data = await fetch("http://localhost:4000/eat");
        data = await data.json();
        console.log("data:", data);

        let arr = [];
        for (let i = 1; i <= data.totalPages; i++) {
            arr.push(i);
        }
        setTotalPages([...arr]);

        setData(data.eat);
    };

    useEffect(() => {
        getData();
    }, []);

    // const handleClick  = ()=>{
    //     f
    // }

    return (
        <div>
            <SortAndFilter />
            <GridItems data={data} />
            <Pagination
                size="lg"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "30px",
                }}
            >
                {totalPages.map((e) => {
                    return (
                        <Pagination.Item
                            // onClick={handleClick}
                            key={e}
                            // active={number === active}
                        >
                            {e}
                        </Pagination.Item>
                    );
                })}
            </Pagination>
        </div>
    );
};

export default MainPage;
