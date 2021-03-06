import React from 'react';
import water from "./waterHand.png"
import drought from "./Drought.png"
import drought1 from "./drought.1.png"
import pipe from "./pipe.png"
import pipe1 from "./pipe.1.png"

function Home() {
  return (
    <div className="text-center">
      
      <div class="company">NiekAab Desal</div>    

      <img className="waterHand" src={water}  />

      <div class="bottom-left">Innovative solutions for clean water strategies</div>

      <div class="bottom-right">NiekAab Desal’s vision is to provide families and businesses with affordable and sustainable tools to ensure safe and reliable drinking water.</div>

      <div class="bottom">In NiekAab Desal, our mission is to be a leading design, manufacturing, and technical service firm delivering an end-to-end solution for water pollution.</div>

      <img className="Drought" src={drought} />  

      <div class="droughtInfo">"By 2025, Half of the world's population will be living in water-stressed areas."
      -World Health Organization</div>

      <img className="pipe" src={pipe} /> 

      <div class="pipeInfo">"Nearly 1/3  of U.S. water systems reported service lines containing lead."

      -American Association for the Advancement of Science</div>
      
    </div>
  );
}
//Line 13 states the companies name at the top of the home page

//Line 15 references the picture displayed on top of the page

//Line 17 states the information on our home page that our client wanted our team to inform his customers

//Line 19 states NiekAabDesals mission statement

//Line 21 continues the mission statement stated previously

//Line 23 inserts picture of a drought

//line 25 inserts a quote about water-stressed areas

//line 28 contains another picture about water

//Lines 30 and 32 contain more information about lead content in water

export default Home;