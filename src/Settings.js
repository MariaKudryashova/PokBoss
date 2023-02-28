import React, { useState, useRef } from "react";

export default function Settings({isConnect,
                                numPlayers,
                                numHands,
                                numDesk,
                                onNumPlayers,
                                onNumHands,
                                onNumDesk,
                                onFormSubmit,
                                onEstimates
                                }) {
  

  return (
    <>
        <form className="form-settings">     
            <label htmlFor="numPlayers">Num players: </label>
            <select id = "numPlayers"
                    name="numPlayers" 
                    onChange={onNumPlayers}
                    value = {numPlayers}
                    // disabled={!isConnect}
                    disabled = {true}
                    >
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <label htmlFor="numHands">Num hands: </label>
            <input id="numHands"
                type="text"
                name="numHands" 
                onChange={onNumHands}
                value = {numHands} 
                // disabled={!isConnect }
                disabled = {true}/>
            <label htmlFor="numDesk">Num desk: </label>
            <input id="numHandsAddDesk"
                type="text"
                name="numDesk" 
                onChange={onNumDesk}
                value = {numDesk} 
                // disabled={!isConnect}
                disabled = {true}/>
            
            <input className="ui-button"
                type="submit" 
                value="PLAY"
                onClick={onFormSubmit} 
                // disabled={!isConnect}
                />

            <button className="ui-button"
                  onClick={onEstimates}>RESULT
            </button> 
           
        </form>
    </>
  );
}
