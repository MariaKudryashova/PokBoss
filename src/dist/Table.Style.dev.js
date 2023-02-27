"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;
var theme = {
  light: {
    column: {
      backgroundColor: '#c0c0c0',
      color: '#000',
      border: '2px solid #f0f0f0'
    },
    rowEven: {
      backgroundColor: '#e5e5e5',
      color: '#010101'
    },
    rowOdd: {
      backgroundColor: '#f0f0f0',
      color: '#010101'
    },
    cell: {
      textAlign: 'left',
      fontSize: '.75rem',
      padding: '5px'
    },
    table: {
      border: '2px solid #f0f0f0',
      borderCollapse: 'collapse'
    },
    button: {
      display: 'inline-block',
      color: '#010101',
      backgroundColor: '#c0c0c0',
      border: '2px solid #c0c0c0',
      fontWeight: 'bold'
    }
  }
};
exports.theme = theme;