import assert from 'assert';

console.log('1 should be equal to 1');
assert.equal(1, 1);

console.log('This test will throw :(');
assert.equal(1, 2);
