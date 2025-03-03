import "./App.css";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

function App() {
  return (
    <>
      {/* <div className="drop-shadow-md"> */}
      <AddTodo />
      <Todos />
      {/* </div> */}
    </>
  );
}

export default App;
