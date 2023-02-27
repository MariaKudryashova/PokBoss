import React, { useState , useEffect} from "react";

export default function Timer({state, onChangeState}) {
  
    const [counter, setCounter] = useState(0);
    const [inter, setInter] = useState(0);

    useEffect(() => {
        
            const interval = setInterval(() => {    
            setCounter((prev) => prev + 1);   
            setInter(interval);       
            }, 1000);
            return () => clearInterval(interval);
        
      }, []);

    if (counter > 5) {
        clearInterval(inter);
        setCounter(0);
        setInter(0);
    }
    
    return (
      <div className="timer">
        <h4>{counter === 0 ? "0":`Initializing the desk... ${counter}`} </h4>
        
        
        
      </div>
    );


//   return (
//     <>
//        <div className="msg">{props.msg}</div>
//     </>
//   );
}
