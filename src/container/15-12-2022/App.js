import '../../style/App.css';
import { useState } from 'react';
import CardItem from '../../component/15-12-2022/CardItem';

function App() {

  const [textInput, setTextInput] = useState("");
  console.log(textInput);

  const onChangeInput = (e) => setTextInput(e.target.value);

  return (
    <>
      <div className='CardFirst' >
        <h2 style={{ minHeight: "50px" }}>{textInput}</h2>
      </div>
      <div className='CardFirst' >
        <h2>Name : <input value={textInput} onChange={onChangeInput}></input></h2>
      </div>
      <div className='CardItem'>
        <CardItem />
      </div>
    </>
  )
}

export default App;
