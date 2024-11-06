import React from 'react';

function UserMessage({content}) {
  return (
    <div className='row' style={{display:'flex', justifyContent:'flex-end', marginBottom:'20px'}}>
      <div className='userInput'>
        <a>{content}</a>
      </div>
    </div>
  );
}

export default UserMessage;