import React from "react";
import { Form } from "react-bootstrap";

const SortAndFilter = ({ setSort, setFilter }) => {
    const handleSort = (e) => {
        const value = e.target.value;
        setSort(value);
    };

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter(value);
    };

    return (
        <div className="sort-filter-parent-div">
            <Form.Group className="sorting-div">
                <Form.Label style={{ width: "150px" }}>
                    Sort by price
                </Form.Label>
                <Form.Select onChange={handleSort}>
                    <option>Select sort type</option>
                    <option value="lth">Low to high</option>
                    <option value="htl">High to low</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="filtering-div">
                <Form.Label style={{ width: "250px" }}>
                    Filter by category
                </Form.Label>
                <Form.Select onChange={handleFilter}>
                    <option>Select filter type</option>
                    <option value="3 Layer Rice Bowls">
                        3 Layer Rice Bowls
                    </option>
                    <option value="Indian Thalis">Indian Thalis</option>
                    <option value="Multigrain Pizzas">Multigrain Pizzas</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
};

export default SortAndFilter;
