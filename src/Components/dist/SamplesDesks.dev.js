"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleDeskCards = exports.SampleHandsCards = void 0;
//пики s (spades)
//бубны d (diamonds)
// червы h (hearts)
// трефы c (clubs) 
//  0:"UNDEFINITED",
// 1:"СТРИТ-ФЛЕШ",
// 2:"КАРЕ",
// 3:"ФУЛЛ-ХАУС",
// 4:"ФЛЕШ",
// 5:"СТРИТ",
// 6:"ТРИПС",
// 7:"ДВЕ ПАРЫ",
// 8:"ПАРА",
// 9:"СТАРШАЯ КАРТА"
//  //FULL HOUSE
// export let SampleHandsCards = [[
//     {suit:"s",rank: 2},
//     {suit:"h",rank: 11}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"d",rank: 13},
//     {suit:"c",rank: 11},
//     {suit:"c",rank: 2},
//     {suit:"d",rank: 3},
//     {suit:"d",rank: 12}
// ]
// //  //FULL HOUSE
// export let SampleHandsCards = [[
//     {suit:"d",rank: 12},
//     {suit:"s",rank: 10}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"h",rank: 10},
//     {suit:"h",rank: 4},
//     {suit:"c",rank: 10},
//     {suit:"s",rank: 9},
//     {suit:"d",rank: 4}
// ]
// // //FLASH
// export let SampleHandsCards = [[
//     {suit:"h",rank: 13},
//     {suit:"h",rank: 11}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"h",rank: 12},
//     {suit:"h",rank: 4},
//     {suit:"h",rank: 2},
//     {suit:"h",rank: 3},
//     {suit:"s",rank: 3}
// ]
// // //STREET FLASH
// export let SampleHandsCards = [[
//     {suit:"h",rank: 7},
//     {suit:"h",rank: 8}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"h",rank: 9},
//     {suit:"h",rank: 10},
//     {suit:"h",rank: 11},
//     {suit:"d",rank: 14},
//     {suit:"s",rank: 3}
// ]
// //STREET 
// export let SampleHandsCards = [[
//     {suit:"h",rank: 3},
//     {suit:"h",rank: 8}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"h",rank: 9},
//     {suit:"h",rank: 10},
//     {suit:"h",rank: 11},
//     {suit:"h",rank: 12},
//     {suit:"s",rank: 3}
// ]
// // // //KARE
// export let SampleHandsCards = [[
//     {suit:"h",rank: 7},
//     {suit:"s",rank: 14}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"h",rank: 14},
//     {suit:"s",rank: 12},
//     {suit:"c",rank: 14},
//     {suit:"d",rank: 14},
//     {suit:"s",rank: 3}
// ]
// // //TRIPLEX
// export let SampleHandsCards = [[
//     {suit:"s",rank: 2},
//     {suit:"h",rank: 5}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"c",rank: 9},
//     {suit:"c",rank: 2},
//     {suit:"h",rank: 13},
//     {suit:"h",rank: 2},
//     {suit:"c",rank: 6}
// ]
// //TWO PAIRS
// export let SampleHandsCards = [[
//     {suit:"s",rank: 7},
//     {suit:"d",rank: 4}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"s",rank: 8},
//     {suit:"d",rank: 3},
//     {suit:"c",rank: 8},
//     {suit:"h",rank: 14},
//     {suit:"s",rank: 14}
// ]
// // //THREE PAIRS
// export let SampleHandsCards = [[
//     {suit:"s",rank: 7},
//     {suit:"d",rank: 3}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"s",rank: 8},
//     {suit:"d",rank: 3},
//     {suit:"c",rank: 8},
//     {suit:"h",rank: 14},
//     {suit:"s",rank: 14}
// ]
//PAIRS
// export let SampleHandsCards = [[
//     {suit:"s",rank: 12},
//     {suit:"h",rank: 7}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"d",rank: 4},
//     {suit:"d",rank: 3},
//     {suit:"s",rank: 3},
//     {suit:"s",rank: 5},
//     {suit:"h",rank: 2}
// ]
// //ONLY MAIN CARD
// export let SampleHandsCards = [[
//     {suit:"s",rank: 12},
//     {suit:"h",rank: 7}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"d",rank: 4},
//     {suit:"d",rank: 11},
//     {suit:"h",rank: 3},
//     {suit:"s",rank: 5},
//     {suit:"h",rank: 2}
// ]
// // FLASH and PARE
// export let SampleHandsCards = [[
//     {suit:"s",rank: 13},
//     {suit:"s",rank: 14}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"d",rank: 9},
//     {suit:"d",rank: 10},
//     {suit:"d",rank: 11},
//     {suit:"d",rank: 12},
//     {suit:"d",rank: 13}
// ]
// // FLASH and TWO PARES
// export let SampleHandsCards = [[
//     {suit:"s",rank: 10},
//     {suit:"s",rank: 8}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"s",rank: 6}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"d",rank: 9},
//     {suit:"d",rank: 10},
//     {suit:"d",rank: 11},
//     {suit:"d",rank: 12},
//     {suit:"d",rank: 13}
// ]
// // STREET FLASH
// export let SampleHandsCards = [[
//     {suit:"s",rank: 2},
//     {suit:"s",rank: 3}
// ],
// [
//     {suit:"s",rank: 13},
//     {suit:"s",rank: 14}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"d",rank: 9},
//     {suit:"d",rank: 10},
//     {suit:"d",rank: 11},
//     {suit:"d",rank: 12},
//     {suit:"d",rank: 13}
// ]
// // //TWO PAIRS
// export let SampleHandsCards = [[
//     {suit:"s",rank: 7},
//     {suit:"d",rank: 4}
// ],
// [
//     {suit:"s",rank: 4},
//     {suit:"c",rank: 3}
// ]
// ];
// export let  SampleDeskCards =  [
//     {suit:"s",rank: 8},
//     {suit:"d",rank: 3},
//     {suit:"c",rank: 7},
//     {suit:"h",rank: 14},
//     {suit:"s",rank: 14}
// ]
// //TWO PAIRS
var SampleHandsCards = [[{
  suit: "s",
  rank: 2
}, {
  suit: "s",
  rank: 3
}], [{
  suit: "s",
  rank: 12
}, {
  suit: "c",
  rank: 6
}], [{
  suit: "c",
  rank: 9
}, {
  suit: "c",
  rank: 4
}], [{
  suit: "h",
  rank: 12
}, {
  suit: "c",
  rank: 2
}], [{
  suit: "d",
  rank: 11
}, {
  suit: "h",
  rank: 9
}]];
exports.SampleHandsCards = SampleHandsCards;
var SampleDeskCards = [{
  suit: "s",
  rank: 7
}, {
  suit: "d",
  rank: 7
}, {
  suit: "d",
  rank: 5
}, {
  suit: "d",
  rank: 10
}, {
  suit: "s",
  rank: 5
}];
exports.SampleDeskCards = SampleDeskCards;