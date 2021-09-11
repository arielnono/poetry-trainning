import { Verse } from '../verse/Verse';
import { InvalidStanzaException } from './InvalidStanzaException';
import { Stanza } from './Stanza';

describe('Stanza class', () => {
  it('should not throw an exception when instantiated with 2 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    expect(() => new Stanza([verse1, verse2])).not.toThrow(
      InvalidStanzaException,
    );
  });
  it('should not throw an exception when instantiated with 3 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const verse3 = new Verse(verseOf15Character);
    expect(() => new Stanza([verse1, verse2, verse3])).not.toThrow(
      InvalidStanzaException,
    );
  });
  it('should not throw an exception when instantiated with 4 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const verse3 = new Verse(verseOf15Character);
    const verse4 = new Verse(verseOf15Character);
    expect(() => new Stanza([verse1, verse2, verse3, verse4])).not.toThrow(
      InvalidStanzaException,
    );
  });
  it('should not throw an exception when instantiated with 5 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const verse3 = new Verse(verseOf15Character);
    const verse4 = new Verse(verseOf15Character);
    const verse5 = new Verse(verseOf15Character);
    expect(
      () => new Stanza([verse1, verse2, verse3, verse4, verse5]),
    ).not.toThrow(InvalidStanzaException);
  });
  it('should not throw an exception when instantiated with 6 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const verse3 = new Verse(verseOf15Character);
    const verse4 = new Verse(verseOf15Character);
    const verse5 = new Verse(verseOf15Character);
    const verse6 = new Verse(verseOf15Character);
    expect(
      () => new Stanza([verse1, verse2, verse3, verse4, verse5, verse6]),
    ).not.toThrow(InvalidStanzaException);
  });
  it('should not throw an exception when instantiated with 7 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const verse3 = new Verse(verseOf15Character);
    const verse4 = new Verse(verseOf15Character);
    const verse5 = new Verse(verseOf15Character);
    const verse6 = new Verse(verseOf15Character);
    const verse7 = new Verse(verseOf15Character);
    expect(
      () =>
        new Stanza([verse1, verse2, verse3, verse4, verse5, verse6, verse7]),
    ).not.toThrow(InvalidStanzaException);
  });
  it('should not throw an exception when instantiated with 8 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const verse3 = new Verse(verseOf15Character);
    const verse4 = new Verse(verseOf15Character);
    const verse5 = new Verse(verseOf15Character);
    const verse6 = new Verse(verseOf15Character);
    const verse7 = new Verse(verseOf15Character);
    const verse8 = new Verse(verseOf15Character);
    expect(
      () =>
        new Stanza([
          verse1,
          verse2,
          verse3,
          verse4,
          verse5,
          verse6,
          verse7,
          verse8,
        ]),
    ).not.toThrow(InvalidStanzaException);
  });
  it('should not throw an exception when instantiated with 9 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const verse3 = new Verse(verseOf15Character);
    const verse4 = new Verse(verseOf15Character);
    const verse5 = new Verse(verseOf15Character);
    const verse6 = new Verse(verseOf15Character);
    const verse7 = new Verse(verseOf15Character);
    const verse8 = new Verse(verseOf15Character);
    expect(
      () =>
        new Stanza([
          verse1,
          verse2,
          verse3,
          verse4,
          verse5,
          verse6,
          verse7,
          verse8,
        ]),
    ).not.toThrow(InvalidStanzaException);
  });
  it('should throw an exception when instantiated with 1 verses', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse1 = new Verse(verseOf15Character);
    expect(() => new Stanza([verse1])).toThrow(InvalidStanzaException);
  });
  it('should throw an exception when instantiated with 0 verses', () => {
    expect(() => new Stanza([])).toThrow(InvalidStanzaException);
  });
  it('should throw an exception when instantiated with null verses', () => {
    expect(() => new Stanza(null)).toThrow(InvalidStanzaException);
  });

  describe('getStanzaText function', () => {
    it('should return a stanza text when called', () => {
      const verseOf15Character1 = 'Je me figure ce1';
      const verseOf15Character2 = 'Je me figure ce2';
      const verseOf15Character3 = 'Je me figure ce3';
      const verse1 = new Verse(verseOf15Character1);
      const verse2 = new Verse(verseOf15Character2);
      const verse3 = new Verse(verseOf15Character3);
      const stanza = new Stanza([verse1, verse2, verse3]);
      expect(stanza.getStanzaText()).toBe(
        'Je me figure ce1\nJe me figure ce2\nJe me figure ce3',
      );
    });
  });
});
