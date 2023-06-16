import Form from "./components/Form";
import ListOfItems from "./components/ListOfItems";
import Logo from "./components/Logo";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ListOfItems />
      <Stats />
    </div>
  );
}

export default App;
