const capitalize = require("./capitalize");

test('capitalize first', ()=>{
    expect(capitalize("some text")).toBe('Some text');
})
test('first letters not  A-Z', ()=>{
    expect(capitalize("2343@$^some text")).toBe('2343@$^Some text');
})
test('invalid ', ()=>{
    expect(capitalize("2343@$^some text")).toBe('2343@$^Some text');
})



const revString = require('./reverseString');

test('reverse string',()=>{
    expect(revString('this string')).toBe('gnirts siht');
})