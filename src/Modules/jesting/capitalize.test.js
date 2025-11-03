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



const calculate = require('./calculator')

test('add',()=>{
    expect(calculate.add(5, 4)).toBe(9);
})
test('subtract',()=>{
    expect(calculate.subtract(5, 4)).toBe(1);
})
test('divide',()=>{
    expect(calculate.divide(5, 5)).toBe(1);
})
test('multiply',()=>{
    expect(calculate.multiply(5, 4)).toBe(20);
})

const cipher = require('./ceaser');

test('a-z wrapping test',()=>{
    expect(cipher('xyz', 3)).toBe('abc');
});
test('lettercase preservation',()=>{
    expect(cipher('heLLo', 3)).toBe('khOOr');
});
test('non alphabetics',()=>{
    expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

const analyze = require('./analyzeArr');
test('array analyzer',()=>{
    expect(analyze([1,8,3,4,2,6])).toStrictEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
})
})