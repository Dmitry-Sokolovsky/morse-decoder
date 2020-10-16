const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const MORSE = {
    '00': '',
    '10': '.',
    '11': '-',
    'space': '**********' 
  };
  
  function decode(expr) {

    let message = '';
    let res = expr.match(/.{10}/g);
    res.map(letter => {
        letter.startsWith('*') ? message += ' '
       : message += MORSE_TABLE[letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')]
    });


    return message;
  }
  
  module.exports = {
      decode
  }