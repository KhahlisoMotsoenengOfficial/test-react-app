import { useState } from "react";

//{items: [], heading: String}

interface ListGroupProperties {
  items: string[];
  heading: string;

  //(item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProperties) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const errorMessage = items.length === 0 && <p>Oooops! No T-shits Found.</p>;
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {errorMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
