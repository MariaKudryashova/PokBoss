//контролируемые компоненты
import React, {useState} from "react";
import { render } from "react-dom";
import "./index.css";
import Settings from "./Settings.js";
// import Timer from "./Components/Timer.js";
import {InitDesk, 
  arrCards, 
  handsCards, 
  DealSecondCards, 
  CheckCombinations,
  FindWinners
  } from "./LibPok.js";

function App() {
  const [state, setState] = useState(0);
  const [isConnect, setIsConnect] = useState(true);

  const [numPlayers, setNumPlayers] = useState(5);
  const [numHands, setNumHands] = useState(2);
  const [numDesk, setNumDesk] = useState(5);


  const [itemsHandsCards, setItemsHandsCards] = useState("");
  const [itemsDeskCards, setItemsDeskCards] = useState("");
  const [itemsCombinations, setItemsCombinations] = useState("");
  const [itemsWinners, setWinners] = useState("");

  function handleFormSubmit(event) {
      event.preventDefault();

      setWinners("");
      setItemsCombinations("");
      // setIsConnect(!isConnect);
      
      const i = InitDesk(numPlayers, numHands);
      setItemsHandsCards(i);

      const ii = DealSecondCards(numPlayers, numHands,numDesk);
      setItemsDeskCards(ii);

      

      // const iii = CheckCombinations();
      // console.log("Combinations checked");
      // setItemsCombinations(iii);
      // const w = FindWinners();
      // setWinners(w);
    }

  function handleConnect() {
      // setIsConnect(!isConnect);
      console.log(isConnect);
  }

  function handleNumPlayers(event) {  
    setNumPlayers(event.target.value);      

  }
  function handleNumHands(event) {
    setNumHands(event.target.value);
  }
  function handleNumDesk(event) {
    setNumDesk(event.target.value);
  }
  function handleChangeState(st) {
    setState(state+1);
    console.log("Change state: ", state);
  }
  function handleEstimates(event) {
    event.preventDefault();
    const i = CheckCombinations();
    console.log("Combinations checked");
    setItemsCombinations(i);
    const w = FindWinners();
    setWinners(w);
  }
 
 
    return (  
    <>
      <div className="field-connetion">
        <button hidden className={isConnect ? "ui-button-on" : "ui-button-off"}
                onClick={handleConnect}> {isConnect ? "On":"Off"}
        </button>     
      </div> 
      <div className="field-settings">
        <Settings isConnect={isConnect}
                  numPlayers={numPlayers}
                  numHands={numHands}
                  numDesk={numDesk}
                  onNumPlayers={handleNumPlayers}
                  onNumHands={handleNumHands}
                  onNumDesk={handleNumDesk}
                  onFormSubmit={handleFormSubmit}
                  onEstimates={handleEstimates}
                  />        
      </div>
      <div className="field-info">
            {itemsWinners}
            
      </div>
      <div className="field-desk">
        <form className="form-desk">
          
            <table className="tablePlayers">{itemsHandsCards}</table>
            <ul >{itemsDeskCards}</ul>
            {/* <button className="ui-button"
                  onClick={handleEstimates}>Estimates
            </button>  */}
          
          <div>
            <h4>Result</h4>
            {itemsCombinations}
          </div>
          
        </form>
      </div>
      <div className="field-states">states
        {/* <Timer state={state} onChangeState={handleChangeState}/> */}
      </div>
      </>
        
    );
}

render(<App />, document.querySelector("#root"));
