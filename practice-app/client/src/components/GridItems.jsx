import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

const GridItems = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        let data = await fetch("http://localhost:4000/eat");
        data = await data.json();
        console.log(data);
        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="sort-filter-parent-div">
                <Form.Group className="sorting-div">
                    <Form.Label style={{ width: "150px" }}>
                        Sort by price
                    </Form.Label>
                    <Form.Select>
                        <option>Select sort type</option>
                        <option>Low to high</option>
                        <option>High to low</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="filtering-div">
                    <Form.Label style={{ width: "250px" }}>
                        Filter by category
                    </Form.Label>
                    <Form.Select>
                        <option>Select filter type</option>
                        <option>3 Layer Rice Bowls</option>
                        <option>Indian Thalis</option>
                        <option>Multigrain Pizzas</option>
                        <option>Bread & Rice</option>
                    </Form.Select>
                </Form.Group>
            </div>
            <div className="cards-div">
                {data.map((e) => {
                    return (
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={e.img_url} />
                            <Card.Body>
                                <Card.Title style={{ minHeight: "50px" }}>
                                    {e.name}
                                </Card.Title>
                                <div className="price-div">
                                    <Card.Text>
                                        Price: ₹{e.price}{" "}
                                        <span className="small-text">
                                            ₹{e.str_price}
                                        </span>
                                    </Card.Text>
                                    <Card.Text>Type: {e.type}</Card.Text>
                                </div>
                                <div className="btn-div">
                                    <Card.Text
                                        style={{
                                            marginTop: "15px",
                                        }}
                                    >
                                        Calories: {e.cal}
                                    </Card.Text>
                                    <Button variant="dark">Add to cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default GridItems;
