import React, { useRef, useState , useEffect } from 'react'
import bot from '../img/bot.svg'
import "./chat.css"
import CreateForm from './CreateForm'
import UserMessage from './UserMessage';
import AiMessage from './AiMessage';

function Chat () {
  const [ inputdatas , setInputDatas ] = useState([]);
  const contentEndRef = useRef(null); 

  const addInputData = (content) => {
    setInputDatas([
      ...inputdatas,
      { content: content, id: Math.random() }
    ]);
  };

  const getAiResponse = (userInput) => {
    return `您輸入的是 "${userInput}"`;
  };

  useEffect(() => { 
    contentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [inputdatas]);

  return (
    <div className='chatContainer'>
      <div className='content'>
        {inputdatas.length === 0 && (
          <div className='cover'>
            <img src={bot} alt='bot' style={{width:'200px',height:'200px'}}/>
            <a style={{fontSize:'50px',fontWeight:'700'}}>Rich 大語言系統</a>
          </div>
        )}

        {inputdatas.map((inputdata) => (
          <div key={inputdata.id}>
            <UserMessage content={inputdata.content}/>
            <AiMessage content={getAiResponse(inputdata.content)}/>
          </div>
        ))}
        <div ref={contentEndRef}/>
      </div>

      <div className='inputBox'>
        <div style={{position:'fixed', bottom:'0', marginBottom:'30px'}}>
          <CreateForm addInputData={addInputData}/>
        </div>
      </div>    
    </div>    
  );
}
export default Chat