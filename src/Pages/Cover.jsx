import React from "react";
import { useNavigate } from "react-router-dom";
import whitebot from "../img/whitebot.svg"
import "./cover.css"

const Cover = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        console.log("Navigating to /login"); // Debug log
        navigate('/login');
    };

    return (
        <div className="coverContainer">
            <div className="logo">
                <img src={whitebot} style={{width:'100px', height:'100px'}} />
                <a style={{fontSize:'44px', fontWeight:'700', color:'white'}}>耀瑄科技Rich大語言模型系統</a>
            </div>
            <div className="introduction">
                <a style={{color:'white', fontSize:'16px', fontWeight:'700'}}>Rich LLM AI服務是現有系統與大語言模型之間的連接層，通過 REST API 提供 AI 功能，實現語言理解、摘要生成、數據處理和個資保護等功能。</a>
                <button className="website" onClick={handleNavigate} >前往網站</button>
            </div>
            
        </div>
    )
}

export default Cover