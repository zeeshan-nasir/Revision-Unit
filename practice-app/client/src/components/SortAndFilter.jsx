import React from "react";
import { Form } from "react-bootstrap";

const SortAndFilter = () => {
    return (
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
    );
};

export default SortAndFilter;
