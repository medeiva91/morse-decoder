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

function decode(expr) {
  const size = expr.length-1;
  console.log(expr.length);

  let count = 0;
  let letter = '';
  let sentence ='';

  while (count < size) {

    console.log("count", count);

    if(expr[count]!="*"){

      let letterChar = '';

      for (let i=count; i<count+10; i+=2) {

        exprChar = expr.slice(i, i+2);
        if (exprChar == '10') {
          letterChar += '.';
        } else if (exprChar == '11') {
          letterChar += '-'
        } else if (exprChar == '00') {
          letterChar = '';
        }

      }
      sentence +=  MORSE_TABLE[letterChar];
      count += 10;
    } else {
      sentence += " ";
      count+=10;
    }
  }

  return sentence;
}

module.exports = {
    decode
}
