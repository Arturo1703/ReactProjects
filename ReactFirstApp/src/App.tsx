import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Madrid", "Barcelona", "Valencia", "Cadiz", "Huesca"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClickedButton = (item: string) => {
    console.log("click");
  };

  return (
    <div>
      <Alert>
        hello <h1>World</h1>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button
        text="Extreme urgency button"
        onClickedButton={handleClickedButton}
      />
    </div>
  );
}

export default App;
