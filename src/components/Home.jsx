import React from 'react';
import water from "./waterHand.png"


function Home() {
  return (
    <div className="text-center">
     
      <img className="waterHand" src={water}  />

      <div class="bottom-left">Innovative solutions for clean water strategies</div>
      <div class="bottom-right">NiekAab Desal’s vision is to provide families and businesses with affordable and sustainable tools to ensure safe and reliable drinking water.</div>
      <div class="bottom">In NiekAab Desal, our mission is to be a leading design, manufacturing, and technical service firm delivering an end-to-end solution for water pollution.</div>
    </div>
  );
}


export default Home;