/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import NewsItems from "../components/NewsItems"
function News (){
    const  [newsList, setNewsList] = useState([

        
            {Baner:"https://www.freecodecamp.org/news/content/images/size/w600/2024/04/websockets.png" , title:"Learn WebSocket with Socket.IO", author:"BRAU CARNES", authorProfile: "https://www.freecodecamp.org/news/content/images/size/w30/2021/05/beau-carnes-gravatar.jpeg" , addedDate: "3 Days ago", category:"#WebSocket"},
            {Baner:"https://www.freecodecamp.org/news/content/images/size/w600/2023/10/FCC-cover--1-.png" , title:"API Integration Patterns – The Difference between REST, RPC, GraphQL, Polling, WebSockets and WebHooks", author:"BRAU CARNES", authorProfile: "https://www.freecodecamp.org/news/content/images/size/w30/2022/11/IMG_0999.jpg" , addedDate: "4 Days ago", category:"#Community"},
            {Baner:"https://www.freecodecamp.org/news/content/images/size/w600/2022/04/react-and-websockets-articlde.png" , title:"React + WebSockets Project – Build a Real-Time Order Book Application", author:"BRAU CARNES", authorProfile:"https://www.freecodecamp.org/news/content/images/size/w30/2020/04/personal-pic-ubs.jpeg" , addedDate: "April 20 2022", category:"#React"},
            {Baner:"https://www.freecodecamp.org/news/content/images/size/w600/2021/11/websockets.jpeg" , title:"How to Add Websocket Real Time Communication to Your SaaS App", author:"BRAU CARNES", authorProfile:"https://www.freecodecamp.org/news/content/images/size/w30/2021/05/beau-carnes-gravatar.jpeg" , addedDate:"5 Nov 2020", category:"#WebSocket"},
            {Baner:"https://cdn-media-1.freecodecamp.org/images/1*OO2brLI8iR1wo8bJx7TKOg.jpeg" , title:"How to secure your WebSocket connections", author:"BRAU CARNES", authorProfile:"https://www.freecodecamp.org/news/content/images/size/w30/2021/05/beau-carnes-gravatar.jpeg" , addedDate: "9 Days ago", category:"#Programming"},
        ])  
    
    
    
    
    return(
        <>
        {
            newsList.map((newsItem, index) =>{
               NewsItems(<NewsItems key={index} newsItem={newsItem} />)
            })
        }
        </>
    )
}

export default News;