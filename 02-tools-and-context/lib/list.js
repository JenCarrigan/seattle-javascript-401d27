'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  //from the earlier lecture
  push(value) {
    // add value to the back of the list
    // assign to an index
    this[this.length] = value;
    // modify the length
    this.length++;
    // return the length
    return this.length;
  }

  pop() {
      // remove val from back of list
      this.length = this.length - 1;
  }

  slice(start, stop) {
    let newArr = new List();

    // if there's no end number
    if (stop == undefined) {

        // starting at the only number given, push the numbers into a new array
        for (let i = start; i < this.length; i++) {
            newArr.push(this[i]);
        }
    }

    // if there are two args
    if (typeof stop == 'number') {

        // starting at the first number, push numbers to new array until hitting the final numer
        for (let i = start; i < stop; i++) {
            newArr.push(this[i]);
        }
    }
    return newArr;
  }

  filter(func) {
      let newArr = new List();
      for (let i = 0; i < this.length; i++) {
        
        // if the function returns truthy, push numbers to new array
        if(func(this[i])) {
            newArr.push(this[i]);
        }
      }
      return newArr;
  }

  // from the earlier lecture
  map(callback) {
    let newList = new List();
    for(let i = 0; i < this.length; i++) {
      newList.push( callback( this[i] ) );
    }

    return newList;
  }

  //help from http://reactivex.io/learnrx/
  reduce(acc, start) {
      let total, count = 0;

      // if there is no current val set the total to the first val
      // unsure why the count starts at 1 as opposed to 0 down below
      if(start == undefined) {
          count = 1;
          total = this[0];
      }

      // if a current val is given, make the total equal to it
      // unsure why the count starts at 0 though
      else {
          count = 0;
          total = start;
      }

      // increase the total with a callback until the length of the array is reached
      while (count < this.length) {
          total = acc(total, this[count]);
          count++;
      }

      //return the number
      return total;
  }
}

module.exports = List;