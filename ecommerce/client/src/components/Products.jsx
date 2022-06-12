import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([]);

    // const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const fetched = await fetch("http://localhost:4000/product");
            const res = await fetched.json();
            // console.log(res.product);
            setData(res.product);
        };

        getData();
    }, []);
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                padding: "50px",
                gridGap: "40px",
            }}
        >
            {data?.map((e) => {
                return (
                    <Card key={e._id} style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src={e.image}
                            style={{ maxHeight: "200px", objectFit: "contain" }}
                        />
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>{e.description}</Card.Text>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default Products;
