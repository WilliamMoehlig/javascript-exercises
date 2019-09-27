const mapArabicToRoman = [
  { roman: 'I', arabic: 1 },
  { roman: 'IV', arabic: 4 },
  { roman: 'V', arabic: 5 },
  { roman: 'IX', arabic: 9 },
  { roman: 'X', arabic: 10 },
  { roman: 'XL', arabic: 40 },
  { roman: 'L', arabic: 50 },
  { roman: 'XC', arabic: 90 },
  { roman: 'C', arabic: 100 },
  { roman: 'CD', arabic: 400 },
  { roman: 'D', arabic: 500 },
  { roman: 'CM', arabic: 900 },
  { roman: 'M', arabic: 1000 },
];

export function arabicToRoman(arabic) {
  let roman = '';
  let rest = arabic;

  // eslint-disable-next-line no-restricted-syntax
  for (const map of mapArabicToRoman) {
    while (rest >= map.arabic) {
      roman += map.roman;
      rest -= map.arabic;
    }
  }

  return roman;
}

export function romanToArabic(roman) {
  console.log('Not implemented yet');
}
