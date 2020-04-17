const { helloWorld } = require('./');

test('Should greet the caller of the function', () => {
  expect(helloWorld()).toBe(`Hello World, I'm Paola!`);
});
