const lookup: any = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export const RomanNumerals = {
  toRoman: (num: any) => {
    const isABigNumber = parseInt(num) <= 3999;
    if (isABigNumber) {
      let result = "",
        i;
      for (i in lookup) {
        while (num >= lookup[i]) {
          result += i;
          num -= lookup[i];
        }
      }
      return result;
    } else {
      return "Too many";
    }
  },

  fromRoman: (string: string) => {
    let result = 0,
      current,
      previous = 0;
    for (const char of string.split("").reverse()) {
      current = lookup[char];
      if (current >= previous) {
        result += current;
      } else {
        result -= current;
      }
      previous = current;
    }
    return result <= 3999 ? result : "Too many";
  },

  validator: (value: string, setIsInteger: any, setInputValue: any) => {
    let isInteger = /^\d+$/.test(value.charAt(0));
    setIsInteger(isInteger);
    if (isInteger) {
      if (/^\d+$/.test(value)) setInputValue(value);
    } else {
        value = value.toUpperCase()
      if (/^[IVXLCDM]+$/.test(value) || value === "") {
        setInputValue(value);
      }
    }
  },
};
