import React, { useState, useRef } from "react";

export default function Card({rank, suit}) {
  

  return (
    <>
        <p>{rank}_{suit}</p>
    </>
  );
}
