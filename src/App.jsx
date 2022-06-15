import "./App.css";
import Parent from "./Parent";

function Welcome(props){
  props.myFunc();
  return <h1>Hello, {props.name}</h1>
}

function App() {
  const message = 'this is message';
  const count = 100;
  function log(){
    console.log("aaaa")
  }

  return (
    <div className="App">
      {/* <Welcome name="Taro" myFunc={log}/>

      <h1>Hello</h1>
      <h2>World</h2>

      <div>message</div>
      <div>{message}</div>
      <div>count</div>
      <div>{count}</div>
      <button>this is button</button>
      <input /> */}
      <Parent/>
    </div>
  );
}

export default App;
