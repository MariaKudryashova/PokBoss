import { flushSync } from "react-dom";
import {SampleHandsCards, SampleDeskCards} from "./Components/SamplesDesks.js";
import Card from "./Card.js";

 //пики бубны червы трефы ["spades", "diamonds", "hearts", "clubs"];
 const suits = ["s", "d", "h", "c"];
    
 // 11 - Валет, 12 - Дама, 13 - Король, 14 - Туз
 const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; 

export let arrCards, handsCards, deskCards;

let SETSAMPLES = false;
let SETDEBUG_STREET = false;
let SETDEBUG_FLASH = false;
let SETDEBUG_PAIRS = false;

let res = [];
let win = [];

//Вывод всех, вывод во флеше, если первая пара одинаковая - победитель по большей второй
export function FindWinners() {
    
    console.log("Finding winners");
    let winnerRating;
    let playersRatings;
    let winnerMainCard;
    let playersRaitingMainCard;
    let itemWinner = <></>;
    let winnerJunCard;
    let playersRaitingMainJunCards;

    winnerRating = res.map(arr => {        
       return arr.id;
    }).sort((a,b)=>a-b).slice(0,1)[0];

    // console.log("winnerRating",winnerRating);

    playersRatings = res.filter(item => item.id === winnerRating);   
    
    if (playersRatings.length == 1) {
        // console.log("Winner: Player_", playersRatings[0].player + 1);

        itemWinner = <p>Winner: Player_{playersRatings[0].player + 1}</p>
        
        win.push(JSON.parse(JSON.stringify(playersRatings[0].player)));
    }
    else {
        winnerMainCard = playersRatings.map(arr =>{
            return arr.main;
        }).sort((a,b)=>b-a).slice(0,1)[0];

        // console.log("winnerMainCard",winnerMainCard);

        playersRaitingMainCard = playersRatings.filter(item => item.main === winnerMainCard);

        // console.log("playersRaitingMainCard",playersRaitingMainCard);

        if (playersRaitingMainCard.length === 1) {            
            itemWinner = <>           
                        Winner: Player_{playersRaitingMainCard[0].player + 1}! Congradulates!     
                        </>
            win.push(JSON.parse(JSON.stringify(playersRaitingMainCard[0].player)));
        } else {
        if (playersRaitingMainCard.length > 1) {
            if (winnerRating != 7) {
            itemWinner = <>           
                            <p>{playersRaitingMainCard.length} winners! Congradulates!</p>  
                            {playersRaitingMainCard.map(i => <p>Player_{i.player+1}</p>)}
                        </>
                playersRaitingMainCard.forEach(i=>{win.push(JSON.parse(JSON.stringify(i.player)))})
                
            }
            else {
                winnerJunCard = playersRatings.map(arr =>{
                    return arr.junior;
                }).sort((a,b)=>b-a).slice(0,1)[0];

                playersRaitingMainJunCards = playersRaitingMainCard.filter(item => item.junior === winnerJunCard);
                
                itemWinner = <>           
                        Winner: Player_{playersRaitingMainJunCards[0].player + 1}! Congradulates!     
                        </>
                if (playersRaitingMainJunCards.length === 1) {
                    win.push(JSON.parse(JSON.stringify(playersRaitingMainJunCards[0].player)));
                    //console.log(playersRaitingMainJunCards[0].player);
                }
                else {
                    playersRaitingMainJunCards.forEach(i=>{
                        
                        win.push(JSON.parse(JSON.stringify(i.player)))});
                }
            }}
        }
               

        console.log("win",win);
    }
    return <div className="field-winners">{itemWinner}</div>;
    
}

//Инициализация колоды, ее тасовка и раздача первых карт
export function InitDesk(numPlayers, 
                            numHands) {
    
                                
    //генерация игроков
    const arrPlayers = Array.from({length: numPlayers}, (element, index) => { 
        return `Player_${index + 1}`;
        });
    // console.log("arrPlayers",arrPlayers);
    arrCards = suits.map(
        function(item, index) {        
          return ranks.map(
            function(item2, index2) {
              return {suit:item, rank:item2};
          })
        }
      ).flat();
      // console.log("arrCards2",arrCards2);
    // console.log("arrCards",arrCards);
    

    // тасуем карты
    var i = 0;
    var k = 0;
    var steps = 0;
    const n = suits.length * ranks.length;
       
    while (steps < n) {
      //в будущем будет супер-пупер рандом из теории ГСЧ      
      i = Math.round(Math.random() * n);
      k = Math.round(Math.random() * n);

      var temp = arrCards[k];
      // console.log("change k=", k, "i=", i, "n=", n);
      arrCards[k] = arrCards[i];
      arrCards[i] = temp; 
      
      steps++;
    }
    
    // console.log("arrCards2",arrCards2);

     //раздача карт игрокам    
    handsCards = arrPlayers.map((item, index) => {
        return arrCards.filter(
          function(item2, index2) {
              return (index2 < Number(numHands)+ Number(index*numHands))&(index2 >= index*numHands)
          })  
    })
    arrCards.splice(0,Number(numPlayers*numHands));
//    console.log("handsCards",handsCards);//JSON.parse(JSON.stringify(handsCards));
    
   if (SETSAMPLES) {
    handsCards = SampleHandsCards;
   }

   const itemsHandsCards = handsCards.map((item,index)=>
    {
      return (<>      
                <td className="tableColumns">
                  Player_{index + 1}
                  {item.map(i => 
                        <tr className="tableRows"><Card rank={i.rank} suit={i.suit}/></tr>)}
                </td>
              </>)
    });
    return itemsHandsCards;
}

//раздача вторых карт - после круга торгов
//дальше уже посмотрим, разбивать еще или нет
export function DealSecondCards(numPlayers, numHands, numDesk) {

    // // еще тасуем карты - так пока решила проблему плохой тасовки
    // var i = 0;
    // var k = 0;
    
    // while (i < arrCards.length) {
    //   i = Math.round(Math.random() * arrCards.length);
    //   k = Math.round(Math.random() * arrCards.length);

    //   var temp = arrCards[k];
    //   // console.log("change k=", k, "i=", i, "n=", n);
    //   arrCards[k] = arrCards[i];
    //   arrCards[i] = temp; 
    //   i++;
    // }


      //на стол выкладка
    deskCards = arrCards.filter((item, index) => {
        return (index >= numPlayers*numHands) & (index < Number(numPlayers*numHands) + Number(numDesk))
    })
    // console.log("deskCards",deskCards);
    arrCards.splice(0,numDesk);

    if (SETSAMPLES) {
        deskCards = SampleDeskCards;
    }  

   const itemsDesk = deskCards.map((item,index)=>
    {
      return (   
               <Card suit={item.suit} rank={item.rank} />
              )
    });
    return itemsDesk;
}

//собираем комбинации карт игроков
export function CheckCombinations() {
     //   //сборка комбинаций

    res = [];
    
    handsCards.map((item)=>{
      item.push(...deskCards)
    });
    handsCards.forEach((item)=>{
        item.sort((x, y) => x.rank - y.rank)
    });

    
    let isFindCombination = false;
    
    // console.log(handsCards);
    handsCards.forEach((hand, index)=>{
        
        isFindCombination = false;

        // console.log(`Flash ${index+1}?`);
        
        let answ1 = _isFlashAndStreet(hand, index);
        if (answ1.isFlash) {
            res.push({"cards":answ1.cards, "player":index, "id": 4,"combination":"FLASH","main":answ1.mainCardCombination,"junior":answ1.junCardCombination}); 
            isFindCombination = true;
        }
        if (answ1.isStreetFlash) {
            res.push({"cards":answ1.cards, "player":index, "id": 1,"combination":"STREET FLASH","main":answ1.mainCardCombination,"junior":answ1.junCardCombination}); 
            isFindCombination = true;
        }


        // console.log(`Street ${index+1}?`);

        if (!isFindCombination) {
            let answ = _isStreet(hand, index);

            if (answ.isStreet) {
                res.push({"cards":answ.r, "player":index, "id": 5,"combination":"STREET", "main":answ.mainCardCombination,"junior":answ.junCardCombination});     
                isFindCombination = true;
            }  
        } 


        if (SETDEBUG_PAIRS) console.log(`Pairs ${index+1}?`);

        
        if (!isFindCombination) {
            let answ3 = _isPairs(hand, index);

                    //isKare, isFullHouse, isTriple, isPairs, r
                    if (answ3.isKare) {
                        res.push({"cards":answ3.r, "player":index, "id": 2,"combination":"KARE","main":answ3.mainCardCombination,"junior":answ3.junCardCombination}); 
                        isFindCombination = true;
                    }
                    if (answ3.isFullHouse) {
                        res.push({"cards":answ3.r, "player":index, "id": 3,"combination":"FULL HOUSE","main":answ3.mainCardCombination,"junior":answ3.junCardCombination}); 
                        isFindCombination = true;
                    }
                    if (!isFindCombination) {
                        if (answ3.isTriple) {
                            res.push({"cards":answ3.r, "player":index, "id": 6,"combination":"TRIPLEX","main":answ3.mainCardCombination,"junior":answ3.junCardCombination}); 
                            isFindCombination = true;
                            
                        }
                        if (answ3.isOnePair) {
                            res.push({"cards":answ3.r, "player":index, "id": 8,"combination":"PARE","main":answ3.mainCardCombination,"junior":answ3.junCardCombination}); 
                            isFindCombination = true;
                        }
                        if (answ3.isTwoPairs) {
                            res.push({"cards":answ3.r, "player":index, "id": 7,"combination":"TWO PAIRS","main":answ3.mainCardCombination, "junior": answ3.junCardCombination}); 
                            isFindCombination = true;
                        }
                    }
        }
        

        if (!isFindCombination) {
            let answ4 = _isMainCardOnly(hand, index);
            res.push({"cards":answ4.card, "player":index, "id": 9,"combination":"MAIN CARD","main":answ4.mainCardOnly}); 
            isFindCombination = true;
        }
        // console.log(res[0]);
        // return;
    });

    // let resSorted = res.sort((a, b) => a.id > b.id ? 1 : -1);
    
    function compareR(a, b) {
        if (a.id> b.id) return 1;
        if (a.id< b.id) return -1;
        if (a.main> b.main) return -1;
        if (a.main< b.main) return 1;           
    }
    let resSorted = res.sort(compareR);
   
    // console.log("res",res);
    const itemsCombinations = resSorted.map((item,index)=>
    {        
      return (<td className="tableResColumns">
            <tr className="tableResRows">{item.player+1}</tr>
            <tr className="tableResRows">{item.combination}</tr>
            <tr className="tableResRows">{item.id}</tr>            
            <tr className="tableResRows">{item.main}</tr>
            {(item.id === 7) 
                    ? <tr className="tableResRows">{item.junior}</tr> 
                    : <tr className="tableResRows">{item.junior}</tr>}
            {(item.id != 9) 
                    ? <tr className="tableCardsRows">
                        {item.cards.map(i => <Card rank={i.rank} suit={i.suit} />)}</tr> 
                    : <tr className="tableResRows">-</tr>}
        </td>)
    });

    return (<>
        <table className="tableResult">
            <td className="tableResColumns">
                <tr className="tableResRows">Player</tr>
                <tr className="tableResRows">Combination</tr>
                <tr className="tableResRows">Rating</tr>
                <tr className="tableResRows">Main card</tr>
                <tr className="tableResRows">Junior card</tr>
                <tr className="tableCardsRows">Cards</tr>
            </td>
            {itemsCombinations}
        </table>
    </>);
}

function _isMainCardOnly(hand, index) {
    let mainCardOnly = hand.map((item)=> {        
        return Number(item.rank);
    })
    .sort((a,b) => b - a)
    .slice(0, 1)[0];
    let card = hand.filter(i => i.rank === mainCardOnly)[0];
    
    return {mainCardOnly, card};
}

//есть ли пары, триплексы и каре - карты одного достоинства
function _isPairs(hand, index) {
    let isKare = false;
    let rankKare = 0;

    let numTriple = 0;
    let isTriple = false;
    let rTriples = [];

    let numPairs = 0;
    let isPairs = false;
    let rPairs = [];

    let isOnePair= false;
    let isTwoPairs = false;

    let mainCardCombination = -1;
    let junCardCombination = -1;

    let r = [];

    let isFullHouse = false;

    ranks.forEach(item => {
        const arr = hand.filter(h => h.rank === item);
        const count = arr.length;
        
        if (count === 4) {
            isKare = true;
            rankKare = item;
            r = arr;            
        } 
        if (count === 3) {
            numTriple += 1;
            isTriple = true;
            rTriples.push(arr)
        }
                
        if (count === 2) {
            numPairs += 1;
            rPairs.push(arr)
            isPairs = true;
        }        
    });   

    // console.log(index, isTriple, isPairs);
    if (isTriple & isPairs) {
        isFullHouse = true;
        rTriples.forEach(i => i.forEach(ii=>r.push(ii)));
        rPairs.forEach(i=>i.forEach(ii=>r.push(ii)));

        console.log("r", r);

        isTriple = false;
        isPairs = false;

        mainCardCombination = rTriples[0][0].rank;
        junCardCombination = rPairs[0][0].rank;
    }
    else {

        if (isTriple) {
            rTriples.forEach(i => 
                i.forEach(ii=> r.push(ii)));
            
            mainCardCombination = r.map((item)=> {
                    return Number(item.rank);
                }).sort((a,b) => b - a)
                .slice(0, 1)[0];
            junCardCombination = mainCardCombination;
            
        }

        if (rPairs.length >= 2) {

            let ranks = rPairs.map((item)=> {
                return Number(item[0].rank);
            });
            ranks.sort((a,b) => b - a);
            ranks.slice(0, 2);

            rPairs.forEach(item => {
                if ((item[0].rank === ranks[0])||(item[0].rank === ranks[1])) {
                    item.forEach(i => {r.push(i)})    
                }});
            isTwoPairs = true;
            mainCardCombination = ranks[0];

            junCardCombination = ranks[1];
        }
        if (rPairs.length === 1) {
            isOnePair = true;
            r = rPairs[0];
            //console.log(r);
            mainCardCombination = rPairs.map((item)=> {
                                            return Number(item[0].rank);
                                        })
                                        .sort((a,b) => b - a)
                                        .slice(0, 1)[0];
            junCardCombination = mainCardCombination;
            // console.log("mainCardCombination",mainCardCombination);
        }
    }

    // console.log("mainCardCombination",mainCardCombination);
   if (SETDEBUG_PAIRS) console.log("isKare", isKare, 
                                    "isFullHouse", isFullHouse,
                                    "isTriplex", isTriple,
                                    "isPairs", isOnePair, isTwoPairs,
                                    "mainCardCombination",mainCardCombination,
                                    "junCardCombination",junCardCombination,
                                    r);
    // console.log(r);
    return {isKare, isFullHouse, isTriple, isOnePair, 
        isTwoPairs, r, mainCardCombination,junCardCombination};
}

//есть ли флеш - 5 карт одной масти и стрит
function _isFlashAndStreet(hand, index) {
    let isFlash = false;
    let cards = [];
    let isStreetFlash = false;
    let mainCardCombination = -1;
    let junCardCombination = -1;

    suits.forEach(item => {       
        let r = hand.filter(h => h.suit === item);
        
        const count = r.length;
        if (count >= 5) {      
            isFlash = true;
            
            if (count == 6) {
                r.shift(0,1);
            }
            if (count == 7) {
                r.shift(0,2);
            }

            cards = JSON.parse(JSON.stringify(r));
            console.log(cards);
        }
    });    

    if (isFlash) {

        let countSerial = 0;
        for (let i = 0; i < cards.length - 1; i++) {
            
                // console.log("CARD", cards);
                const temp0 = cards[i].rank + 1;
                const temp1 = cards[i+1].rank;                 
                if (temp0 === temp1) {
                    countSerial = countSerial + 1;  
                    console.log("countSerial", countSerial);                                                        
                
                    if (countSerial === 4) {                                              
                        isStreetFlash = true; 
                        isFlash = false;                      
                    }
                }
                else {
                    countSerial = 0;
                }         
        } 
        mainCardCombination = cards.map((item)=> {
                return Number(item.rank);
            })
            .sort((a,b) => b - a)
            .slice(0, 1)[0];
        
        junCardCombination = cards.map((item)=> {
                return Number(item.rank);
            })
            .sort((a,b) => a - b)
            .slice(0, 1)[0];

        // console.log("Player", index, "isFlash", isFlash, "isSteetFlash",isStreetFlash, "cards",cards);        
    }    
    
    return {isFlash, isStreetFlash, cards, mainCardCombination, junCardCombination};
}

//есть ли стрит
function _isStreet(hand, index){
    let isStreet = false;

    let arrayDiffRanks = [];
    let arraySuitsForDiffRanks = [];
    let mainCardCombination = -1;
    let junCardCombination = -1;

    //есть ли одинаковые по достоинству карты?
    hand.forEach((item)=>{
        if (arrayDiffRanks.indexOf(item.rank)===-1) {
            arrayDiffRanks.push(item.rank);     
            arraySuitsForDiffRanks.push(item.suit);            
        }        
    });    
    
    let countSerial = 0;
    let r = [];   
    let stop = false;
        
        if (arrayDiffRanks.length >= 5) {
            if (SETDEBUG_STREET) console.log("Count diff ranks >= 5", arrayDiffRanks);

            for (let i = 0; i < arrayDiffRanks.length - 1; i++) {
                if (!stop) {
                    const temp0 = arrayDiffRanks[i] + 1;
                    const temp1 = arrayDiffRanks[i+1]; 
                    
                    if (temp0 === temp1) {
                        countSerial = countSerial + 1;    
                        if (SETDEBUG_STREET) console.log("temp0", temp0, "temp1", temp1,"add",arrayDiffRanks[i]);                
                        r.push({suit:arraySuitsForDiffRanks[i],rank:arrayDiffRanks[i]});                    
                    
                        if (r.length === 4) {
                            r.push({suit:arraySuitsForDiffRanks[i+1], rank:arrayDiffRanks[i + 1]});                       
                            countSerial = countSerial + 1; 
                            stop = true;                         
                        }
                        }
                    else {
                        r = [];
                        if (countSerial < 5) {
                            countSerial = 0;
                        }
                    }  
                }              
            } 

            if (countSerial === 5) {
                isStreet = true;                  
                
            }        
        };
    
    mainCardCombination = r.map((item)=> {
            return Number(item.rank);
        })
        .sort((a,b) => b - a)
        .slice(0, 1)[0];
    
    junCardCombination = r.map((item)=> {
            return Number(item.rank);
        })
        .sort((a,b) => a - b)
        .slice(0, 1)[0];

    if (SETDEBUG_STREET || isStreet) {
        console.log("Player",index, "isStreet=",isStreet, "cards", r);
    }

   
    return {isStreet, r, mainCardCombination, junCardCombination};
    
}

