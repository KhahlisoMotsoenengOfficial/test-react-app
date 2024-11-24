import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = [
    "UI:Withdrawal T-shirt",
    "UI: Deposit T-shirt",
    "Launch Tee",
    "London",
    "Paris",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleOnClick = () => {
    setAlertVisibility(true);
  };

  const handleOnClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Componets"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={handleOnClose}>I smell missing info...!</Alert>
      )}
      <Button text="Next" color="primary" onClick={handleOnClick} />
    </div>
  );
}

export default App;
