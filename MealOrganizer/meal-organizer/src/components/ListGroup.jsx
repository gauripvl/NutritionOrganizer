import { useState} from "react";

function ListGroup({items, name, onSelectItem}) {
    // let items = ['New York', 'San Francisco', 'Tokyo', 'New Delhi', 'London', "Paris"];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        return items.length === 0 && <p> No items Found</p>
    }




    return (
        <>
            <h1> {name}</h1>
            {getMessage()}

            <ul className="list-group">
                {items.map((item, index) => <li
                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item}
                    onClick={() => {setSelectedIndex(index);
                    onSelectItem(item);}}> {item}
                </li>)}
            </ul>

        </>

    );
}

export default ListGroup;