import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };

  return (
    <div className='registerPage'>
      <div className='registerBox'>
        <div className='inform'>
        <a className='registerTitle'>註冊 Register</a>
          <div className='field col-12' style={{marginBottom:'20px'}}>
            <label className='col-form-label caption'>帳號</label>
            <div className='col-form-editor'>
              <input type='text' className='form-control' style={{width:'-webkit-fill-available'}} placeholder='帳號' required/>
            </div>
          </div>

          <div className='field col-12' style={{marginBottom:'20px'}}>
            <label className='col-form-label caption'>密碼</label>
            <div className='col-form-editor'>
              <input type='text' className='form-control' style={{width:'-webkit-fill-available'}} placeholder='密碼' required/>
            </div>
          </div>

          <div className='field col-12' style={{marginBottom:'20px'}}>
            <label className='col-form-label caption'>確認密碼</label>
            <div className='col-form-editor'>
              <input type='text' className='form-control' style={{width:'-webkit-fill-available'}} placeholder='密碼' required/>
            </div>
          </div>

          <div className='submitBtn'>
            <button className='submit' onClick={handleNavigate}>註冊</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register