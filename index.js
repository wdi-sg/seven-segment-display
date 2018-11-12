// const numbers = {
//   one: ['   ', '  |', '  |'],
//   two: [' _ ', ' _|', '|_ ']
// };

// const analog = (input) => {
//   let result = [];
//   input.array.forEach((element) => {});
// };

// let string = `
// ${numbers.one[0]}${numbers.two[0]}
// ${numbers.one[1]}${numbers.two[1]}
// ${numbers.one[2]}${numbers.two[2]}
// `;

// console.log(string);

const top = {
  0: ' _ ',
  1: '   ',
  2: ' _ ',
  3: ' _ ',
  4: '   ',
  5: ' _ ',
  6: '   ',
  7: ' _ ',
  8: ' _ ',
  9: ' _ '
};

const mid = {
  0: '| |',
  1: '  |',
  2: ' _|',
  3: ' _|',
  4: '|_|',
  5: '|_ ',
  6: '|_ ',
  7: '  |',
  8: '|_|',
  9: '|_|'
};

const bot = {
  0: '|_|',
  1: '  |',
  2: '|_ ',
  3: ' _|',
  4: '  |',
  5: ' _|',
  6: '|_|',
  7: '  |',
  8: '|_|',
  9: ' _|'
};

analog = (input) => {
  let result = '';
  let topSection = '';
  let midSection = '';
  let botSection = '';
  for (const i of input.toString()) {
    topSection += top[i];
    midSection += mid[i];
    botSection += bot[i];
  }

  result = topSection + '\n' + midSection + '\n' + botSection;
  return result;
};

console.log(analog(80085));

decode = (input) => {
  var parts = input.match(/[\s\S]{3}/g) || [];
  return parts;
};

//console.log(decode(analog(80085)));
