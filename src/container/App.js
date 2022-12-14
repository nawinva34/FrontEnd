import '../style/App.css';
import { useState } from 'react';
import Carditem from '../component/Carditem';

function App() {

  const [textInput, setTextInput] = useState("");
  console.log(textInput);

  const onChangeInput = (e) => setTextInput(e.target.value);

  return (
    <>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <h2 style={{ minHeight: "50px" }}>{textInput}</h2>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <h2>Name : <input value={textInput} onChange={onChangeInput}></input></h2>
      </div>

      <div style={{ justifyContent: "center", display: "flex", flexWrap: "wrap", padding: "50px" }}>
        <Carditem />
      </div>
    </>
  )
}

export default App;
