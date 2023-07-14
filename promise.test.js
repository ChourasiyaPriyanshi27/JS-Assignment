const fetchPromise = require("./promise");
test("Promise", () => {
  return fetchPromise().then((data) => {
    expect(data).toBe("Hello");
  });
});
test("zero", () => {
  const z = 0;
  expect(z).toBeDefined();
});
test("zero", () => {
  const z = false;
  expect(z).toBeFalsy();
});
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThanOrEqual(3);
});
test('there is no I in team', () => {
    expect('team').toMatch(/t/);
  });