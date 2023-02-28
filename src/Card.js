import React, { useState, useRef } from "react";
import {Cover, SpadesImgs, ClubsImgs, DiamondsImgs, HeartsImgs} from "./Components/Images.js";



export default function Card({rank, suit}) { 
  
  let n = Cover;//SpadesImgs[0]

  if (suit === "s") {
    n = SpadesImgs[rank-2];
  }
  if (suit === "c") {
    n = ClubsImgs[rank-2];
  }
  if (suit === "d") {
    n = DiamondsImgs[rank-2];
  }
  if (suit === "h") {
    n = HeartsImgs[rank-2];
  }

  return (
    <>           
      <img width="100" src={n} alt={n}/>
        
    </>
  );
}
