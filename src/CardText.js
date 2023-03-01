import React, { useState, useRef } from "react";


export default function CardText({rank, suit}) { 
  
  let nameRank = "";
  let nameSuit = "";
  if (rank <= 10) {nameRank = rank;}
  if (rank === 11) {nameRank = "V"}
  if (rank === 12) {nameRank = "D";}
  if (rank === 13) {nameRank = "K";}
  if (rank === 14) {nameRank = "T";}

  if (suit === "c") {nameSuit = "clubs"}
  if (suit === "s") {nameSuit = "spades"}
  if (suit === "h") {nameSuit = "hearts"}
  if (suit === "d") {nameSuit = "diamonds"}

  return (
    <>           
      <p>{nameRank}_{nameSuit}</p>
        
    </>
  );
}

