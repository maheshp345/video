// import logo from './logo.svg';
import './App.css';
import {  useState } from 'react';
// import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// video&Images js
import image1 from './Components/Assets/section3/avengers.jpg';
import image2 from './Components/Assets/section3/baaghi3.jpg';
import image3 from './Components/Assets/section3/bahubali.jpg';
import image4 from './Components/Assets/section3/got.jpg';
import image5 from './Components/Assets/section3/kgf2.jpg';
import image6 from './Components/Assets/section3/liger.jpg';
import image7 from './Components/Assets/section3/lionking.jpg';
import image8 from './Components/Assets/section3/rrr.jpeg';
import image9 from './Components/Assets/section3/sacredgames.jpg';
import image10 from './Components/Assets/section3/shamshera.jpg';
import image11 from './Components/Assets/section3/super30.jpg';
import image12 from './Components/Assets/section3/vikram.jpg';


import video1 from './Components/Assets/section3/avengers.mp4';
import video2 from './Components/Assets/section3/baaghi3.mp4';
import video3 from './Components/Assets/section3/Bahubali.mp4';
import video4 from './Components/Assets/section3/Got.mp4';
import video5 from './Components/Assets/section3/Kgf2.mp4';
import video6 from './Components/Assets/section3/Liger.mp4';
import video7 from './Components/Assets/section3/Lion_King.mp4';
import video8 from './Components/Assets/section3/RRR.mp4';
import video9 from './Components/Assets/section3/Sacred_games.mp4';
import video10 from './Components/Assets/section3/Shamshera.mp4';
import video11 from './Components/Assets/section3/Super30.mp4';
import video12 from './Components/Assets/section3/Vikram.mp4';






function App() {
  // let images = [image1,image2,image3,image4,image5,image6,image7,image8,image8,image9,image10,image11,image12];

  // let videos = [video1,video2,video3,video4,video5,video6,video7,video8,video9,video10,video11,video12];

  let data = [
    {
      image: image1,
      video: video1
    },
    {
      image: image2,
      video: video2
    },
    {
      image: image3,
      video: video3
    },
    {
      image: image4,
      video: video4
    },
    {
      image: image5,
      video: video5
    },
    {
      image: image6,
      video: video6
    },
    {
      image: image7,
      video: video7
    },
    {
      image: image8,
      video: video8
    },
    {
      image: image9,
      video: video9
    },
    {
      image: image10,
      video: video10
    },
    {
      image: image11,
      video: video11
    },
    {
      image: image12,
      video: video12
    }

  ]
  const [displayVideo, setDisplayVideo] = useState("");

  let changeVideo = (videoUrl) => {
    setDisplayVideo(videoUrl)
  }

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  // Forms js

  const [isLogin,setIsLogin] = useState(true);
 

  const changeForm = (displayForm) =>{

    setIsLogin(displayForm);
  }


return (
  <>
  {/* formshtmlcode */}
    <div className="data">
        <div className="buttons">
          <button className="button1" onClick ={()=>{changeForm(true)} }  >LOGIN</button>
          <button className='button2' onClick={()=>{changeForm(false)}}> REGISTER</button>
        </div>
          
           <div className="forms">
          { 
             isLogin ? 
              (<div className="loginform" id="Login">
                <h1>Loginform</h1>
                <input type="text" placeholder='Enter your Email-id' className='box1' />
                <input type="password"   placeholder='Password' className='box1' />
                <input type="submit"  className='button2'/>
              </div>):
              
               (<div className="regform">
                <h1>Registration form</h1>
                <input type="text"   placeholder='Enter First Name' className='box1' />
                <input type="text"   placeholder='Enter Last Name'  className='box1' />
                <input type="text"   placeholder='Enter your emil id' className='box1' />
                <input type="text"   placeholder='Enter your mobile number'  className='box1' />
                <input type="text"   placeholder='create Password' className='box1' />
                <input type="text"   placeholder='confirm Password' className='box1' />
                <input type="submit"  className='button1'/>
                
               </div>
               )
               
              }
            </div>
          
    </div>

{/* videos and images html code */}
      <div className="main">
        <div className="slider">
          <Slider {...settings}>
            {
              data.map((item) => <img src={item.image} alt="" onClick={() => changeVideo(item.video)} ></img>)

            }
          </Slider>
        </div>
        <div class="videos">
          <video src={displayVideo} controls autoPlay></video>
        </div>
      </div>

     </>
  );
}

export default App;
