"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitDesk = InitDesk;
exports.handsCards = exports.arrCards = void 0;
//пики бубны червы трефы ["spades", "diamonds", "hearts", "clubs"];
var suits = ["s", "d", "h", "c"]; // 11 - Валет, 12 - Дама, 13 - Король, 14 - Туз

var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var arrCards, handsCards;
exports.handsCards = handsCards;
exports.arrCards = arrCards;

function InitDesk(numPlayers, numHands, numDesk) {
  //генерация игроков
  var arrPlayers = Array.from({
    length: numPlayers
  }, function (element, index) {
    return "Player_".concat(index + 1);
  }); // console.log("arrPlayers",arrPlayers);

  exports.arrCards = arrCards = suits.map(function (item, index) {
    return ranks.map(function (item2, index2) {
      return {
        suit: item,
        rank: item2
      };
    });
  }).flat(); // console.log("arrCards2",arrCards2);
  // console.log("arrCards",arrCards);
  // тасуем карты

  var i = 0;
  var k = 0;
  var n = suits.length * ranks.length;

  while (i < n) {
    //в будущем будет супер-пупер рандом из теории ГСЧ      
    i = Math.round(Math.random() * n);
    k = Math.round(Math.random() * n);
    var temp = arrCards[k]; // console.log("change k=", k, "i=", i, "n=", n);

    arrCards[k] = arrCards[i];
    arrCards[i] = temp;
    i++;
  } // console.log("arrCards2",arrCards2);
  //раздача карт игрокам    


  exports.handsCards = handsCards = arrPlayers.map(function (item, index) {
    return arrCards.filter(function (item2, index2) {
      return index2 < Number(numHands) + Number(index * numHands) & index2 >= index * numHands;
    });
  }); //console.log("handsCards",handsCards);//JSON.parse(JSON.stringify(handsCards));
}

function DealSecondCards() {//   //на стол выкладка
  //   const deskCards = arrCards2.filter((item, index) => {
  //       return (index >= numPlayers*numHands) & (index < Number(numPlayers*numHands) + Number(numDesk))
  //   })
  //   console.log("deskCards",deskCards);
  //  const itemsDesk = deskCards.map((item,index)=>
  //   {
  //     return (<td>      
  //              <tr>{item.rank}_{item.suit}</tr>
  //             </td>)
  //   });
}

function ChackCombinations() {//   //сборка комбинаций
  //   console.log("handsCards",handsCards);
  //   const contests = handsCards.forEach((item)=>{
  //     item.push(...deskCards);
  //   });
  //   console.log(contests);
}