import { Players } from "./player";

test('randomNum returns number between 0 and 101 inclusive', () => {
    expect(Players().Computer().randomNum()).toBeGreaterThan(0);
    expect(Players().Computer().randomNum()).toBeLessThan(101);
})
test('randomNum does not return the same value', () => {
    let num = Players().Computer([2]).randomNum();
    expect(num).not.toBe(2);
})
test('Player returns coordinate', () => {
    expect(Players().playerTurn('c23')).toMatchObject(['c23']);
})
test('Computer attack is not undefined or null', () => {
    let num = Players().Computer().randomNum();
    expect(Players().Computer().compAttack(num)).not.toBeNull();
    expect(Players().Computer().compAttack(num)).not.toBeUndefined();
})