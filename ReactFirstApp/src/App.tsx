import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Madrid", "Barcelona", "Valencia", "Cadiz", "Huesca"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
