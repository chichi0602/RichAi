import { useState } from "react";
import send from '../img/send.svg'
import "./chat.css"

function CreateForm({addInputData}) {
    const [ content , setContent ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        addInputData(content)
        setContent('')
    };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input type="text" className="form-control" placeholder="請輸入文字"
        value={content} 
        onChange={(e) => {setContent(e.target.value)}}/>
        <button className="sendBtn" type="submit"><img src={send}/></button>
      </div>        
    </form>
  );
}

export default CreateForm