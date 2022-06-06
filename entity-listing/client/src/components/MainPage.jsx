import React, { useEffect, useState } from "react";
import GridItems from "./GridItems";
import SortAndFilter from "./SortAndFilter";
import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [sort, setSort] = useState(null);
    const [filter, setFilter] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const getData = async () => {
            let data = await fetch(
                `http://localhost:4000/eat?page=${pageNumber}&sort=${sort}&filter=${filter}`
            );
            data = await data.json();
            // console.log("data:", data);

            let arr = [];
            for (let i = 1; i <= data.totalPages; i++) {
                arr.push(i);
            }
            setTotalPages([...arr]);

            setData(data.eat);
        };

        getData();

        setSearchParams({ page: pageNumber, sort: sort, filter: filter });
    }, [pageNumber, sort, filter, setSearchParams]);

    const handlePagination = (num) => {
        // console.log(num);
        setPageNumber(num);
    };

    return (
        <div>
            <SortAndFilter setSort={setSort} setFilter={setFilter} />
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
                            onClick={() => handlePagination(e)}
                            key={e}
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
