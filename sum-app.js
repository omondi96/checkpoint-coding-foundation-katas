class SumApp {
  //dont forget the this. function in classes!! , leeren array
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    let sum = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      const n = this.numbers[i];
      sum += n;
    }
    return sum;
  }

  reset() {
    this.numbers.length = 0;
  }
}
