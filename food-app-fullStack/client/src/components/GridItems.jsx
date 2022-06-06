import { Card, Button } from "react-bootstrap";

const GridItems = ({ data }) => {
    return (
        <div className="cards-div">
            {data.map((e) => {
                return (
                    <Card key={e.id} style={{ width: "18rem" }}>
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
    );
};

export default GridItems;
