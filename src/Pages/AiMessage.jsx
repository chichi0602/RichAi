import React from 'react';
import bot from '../img/bot.svg';
import copy from '../img/copy.svg';
import volume from '../img/volume.svg';
import translation from '../img/translation.svg';

function AiMessage({content}) {
  return (
    <div className='row' style={{display:'flex', justifyContent:'flex-start', marginBottom:'20px'}}>
      <div className='col' style={{marginRight:'20px' }}>
        <img src={bot} style={{width:'50px', height:'50px'}} />
      </div>
      <div className='col'>
        <div className='aiOutput'>
          <a>{content}</a>
        </div>
        <div className='tools'>
          <img src={copy} style={{width:'20px', height:'20px'}} />
          <img src={volume} style={{width:'20px', height:'20px'}} />
          <img src={translation} style={{width:'20px', height:'20px'}} />
        </div>
      </div>
    </div>
  );
}

export default AiMessage;