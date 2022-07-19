// import "./App.css";
import "./index.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircle,
    faCheckCircle,
    faChevronLeft,
    faChevronRight,
    faPlus,
    faTrashCan,
    faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
    const [items, setItems] = useState([
        // { itemName: "milk", quantity: 1, isSelected: false },
        // { itemName: "bananas", quantity: 2, isSelected: true },
        // { itemName: "yogurt", quantity: 1, isSelected: false },
    ]);

    // useEffect(() => {
    //     localStorage.setItem("items", JSON.stringify(items));
    // }, [items]);

    // create a state object and initialize it with an empty string
    const [inputValue, setInputValue] = useState("");

    const [totalItemCount, setTotalItemCount] = useState(0);

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
        totalQuantity();

        // resets the state
        setInputValue("");
    };

    // using index as a parameter so we know which button was clicked
    const handleIncQuantity = (index) => {
        // alert("selected: " + index);
        const newItems = [...items];

        // returns the object at that index and inc the quantity
        newItems[index].quantity++;

        console.log(newItems);
        setItems(newItems);
        totalQuantity();
    };

    const handleDecQuantity = (index) => {
        const newItems = [...items];

        // returns the object at that index and inc the quantity
        newItems[index].quantity--;

        setItems(newItems);
        totalQuantity();
    };

    const toggleDone = (index) => {
        // alert("selected: " + index);
        const newItems = [...items];

        // toggle the selected item's isSelected to the true/false
        newItems[index].isSelected = !newItems[index].isSelected;

        setItems(newItems);
    };

    const totalQuantity = () => {
        // reduce function take a bunch of values from an array and squashes down into one value
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0); // starting value should be 0

        console.log(totalItemCount);
        setTotalItemCount(totalItemCount);
    };

    // takes the index of the item to delete and returns a function that calls setItems.
    const handleDeleteItem = (index) => {
        // set items to an array that doesn't include the item in items at index
        setItems((items) => items.filter((_, i) => i !== index));
    };

    const handleClearItem = (index) => {
        setItems([]);
        setTotalItemCount(0);
    };

    return (
        <div className="app-background">
            <h1>Shopping List</h1>
            <div className="main-container">
                <div className="add-item-box">
                    <input
                        className="add-item-input"
                        placeholder="Add item"
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
                    {/* render the items */}
                    {items.map((item, index) => (
                        <div className="item-container">
                            <div
                                className="item-name"
                                onClick={() => toggleDone(index)}
                            >
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
                                        onClick={() => handleDecQuantity(index)}
                                    />
                                </button>
                                <span> {item.quantity} </span>
                                <button>
                                    <FontAwesomeIcon
                                        icon={faChevronRight}
                                        onClick={() => handleIncQuantity(index)}
                                    />
                                </button>
                                <button>
                                    <FontAwesomeIcon
                                        icon={faTrashCan}
                                        onClick={() => handleDeleteItem(index)}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="total">Total: {totalItemCount}</div>
                <div className="clearAll">
                    <button
                        className="clearButton"
                        onClick={() => handleClearItem()}
                    >
                        <FontAwesomeIcon
                            icon={faCircleMinus}
                            className="circleMinus"
                        />
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
