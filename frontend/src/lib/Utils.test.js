import { lastGames, formatHeight, formatWeight } from './Utils';

describe('lastGames', () => {
  it('counts wins and losses from a bool array', () => {
    const result = lastGames([true, false, true]);
    expect(result.wins).toEqual(2);
    expect(result.losses).toEqual(1);
  });
  it('handles empty array', () => {
    const result = lastGames([]);
    expect(result.wins).toEqual(0);
    expect(result.losses).toEqual(0);
  });
});

describe('formatHeight', () => {
  it('formats height from centimers to meter', () => {
    expect(formatHeight(182)).toBe("1.82");
  });
});

describe('formatWeight', () => {
  it('formats weight from grams to kilograms', () => {
    expect(formatWeight(63000)).toBe("63");
  });
});
