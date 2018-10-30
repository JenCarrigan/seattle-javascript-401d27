'use strict';

const List = require('../../lib/list.js');

describe('Testing the List class', () => {
  it('should have a length of zero', () => {
    let initialList = new List();
    expect(initialList.length).toBe(0);
  });

  // PUSH
  it('should add a new element to the List', () => {
    let pushList = new List();
    pushList.push(6);
    pushList.push(8);
    pushList.push(1);
    pushList.push(3);
    expect(pushList.length).toBe(4);
  });

  // POP
  it('should remove last element of List', () => {
      let popList = new List();
      popList.push(1);
      popList.push(2);
      popList.push(3);
      popList.push(4);
      popList.pop();
      expect(popList.length).toBe(3);
  });

  // SLICE
  it('should remove elements up to index', () => {
    let sliceList = new List();
    sliceList.push(1);
    sliceList.push(2);
    sliceList.push(3);
    sliceList.push(4);
    let newSlice = sliceList.slice(2);
    expect(newSlice.length).toBe(2);
  });

  it ('should remove elements up to index1 then everything after index2', () => {
    let sliceList = new List();
    sliceList.push(1);
    sliceList.push(2);
    sliceList.push(3);
    sliceList.push(4);
    let newSlice = sliceList.slice(2,3);
    expect(newSlice.length).toBe(1);
  });

  // MAP
  it('should iterate over the array and run the callback for each element', () => {
    let mapList = new List();
    mapList.push(5);
    mapList.push(4);
    mapList.push(9);
    mapList.push(16);

    let actual = mapList.map(num => num * 2);
    expect(actual.length).toEqual(mapList.length);
    expect(actual).not.toEqual(mapList);
  });

  // FILTER
  it('should remove any values not meeting the requirements of the function', () => {
      let filterList = new List();
      filterList.push(1);
      filterList.push(2);
      filterList.push(3);
      filterList.push(4);

      let actual = filterList.filter(num => num > 2);
      expect(actual.length).toEqual(2);

  });

  // REDUCE
  it('should sum the contents of an array', () => {
      let reduceList = new List();
      reduceList.push(1);
      reduceList.push(2);
      reduceList.push(3);
      reduceList.push(4);

      let actual = reduceList.reduce((acc, val) => acc + val);
      expect(actual).toStrictEqual(10);
  });

})