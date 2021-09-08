import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          {" "}
          to<span className="do">.do</span>
        </h1>
        <Form />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
