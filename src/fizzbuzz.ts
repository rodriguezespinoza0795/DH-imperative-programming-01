type Fizzbuzz = (num: number) => number | string;
type Print = (num: number) => void;
type Divisible = (num: number, divisor: number) => boolean;

const divisible: Divisible = (num, divisor) => num % divisor === 0;

export const fizzbuzz: Fizzbuzz = (num) => {
  if (num === 0) return num;

  if (divisible(num, 3) && divisible(num, 5)) return 'fizzbuzz';

  if (divisible(num, 3)) return 'fizz';

  if (divisible(num, 5)) return 'buzz';

  return num;
};

const print: Print = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
};

print(15);
