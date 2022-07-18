// import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faCheckCircle,
    faChevronLeft,
    faChevronRight,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
    const [items, setItems] = useState([
        { itemName: "item 1", quantity: 1, isSelected: false },
        { itemName: "item 2", quantity: 3, isSelected: true },
        { itemName: "item 3", quantity: 2, isSelected: false },
        { itemName: "item 4", quantity: 5, isSelected: true },
    ]);

    // create a state object and initialize it with an empty string
    const [inputValue, setInputValue] = useState("");

    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };

        // append a new item onto the existing item list
        const newItems = [...items, newItem];

        // update the state
        setItems(newItems);
        // resets the state
        setInputValue("");
    };

    const handleIncQuantity = () => {
        // const
    };

    const handleDecQuantity = () => {
        // const
    };

    return (
        <div className="app-background">
            {/* <h1>Shopping List</h1> */}
            <div className="main-container">
                <div className="add-item-box">
                    <input
                        className="add-item-input"
                        placeholder="Add Item"
                        value={inputValue} // take control of the input
                        onChange={(event) => setInputValue(event.target.value)} // update the state anytime the input value changes
                        // react passes in the event to the function and the setInputValue gets called which is the function that changes our state value and passes in the event.target.value
                    ></input>
                    <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => handleAddButtonClick()}
                        className="add-item-button"
                    />
                </div>
                <div className="item-list">
                    {items.map((item, index) => (
                        <div className="item-container">
                            <div className="item-name">
                                {item.isSelected ? (
                                    <>
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                        <span className="completed">
                                            {item.itemName}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faCircle} />
                                        <span>{item.itemName}</span>
                                    </>
                                )}
                            </div>
                            <div className="quantity">
                                <button>
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        onClick={() => handleDecQuantity()}
                                    />
                                </button>
                                <span> {item.quantity} </span>
                                <button>
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        onClick={() => handleIncQuantity()}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="total">Total: 6</div>
            </div>
        </div>
    );
}

export default App;
