import React from 'react'
import { useNavigate } from 'react-router-dom';
import pin from '../img/pin.svg'
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/chat');
  };

  const handleNavigate2 = () => {
    navigate('/register');
  };

  return (
    <div className='loginPage'>
      <div className='loginBox'>
        <div className='inform'>
          <a className='loginTitle'>登入 Login</a>
          <div className='field col-12'>
            <label className='col-form-label caption'>帳號</label>
            <div className='col-form-editor'>
              <input type='text' className='form-control' style={{width:'-webkit-fill-available'}} placeholder='帳號' required/>
            </div>
          </div>

          <div className='field col-12'>
            <label className='col-form-label caption'>密碼</label>
            <div className='col-form-editor'>
              <input type='text' className='form-control' style={{width:'-webkit-fill-available'}} placeholder='密碼' required/>
            </div>
          </div>

          <div className='field col-12'>
            <label className='col-form-label caption'>驗證碼</label>
            <div className='col-form-editor' style={{display:'flex', alignItems:'center'}}>
              <input type='text' className='form-control' style={{width:'100px', marginRight:'20px'}} placeholder='驗證碼' required/>
              <img src={pin} style={{width:'120px'}}/>
            </div>
          </div>

          <div className='submitBtn'>
            <button className='submit' onClick={handleNavigate}>登入</button>
          </div>

          <div className='registerBtn'>
            <button className='register' onClick={handleNavigate2}>註冊帳號</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login