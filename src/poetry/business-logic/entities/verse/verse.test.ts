import { Verse } from './Verse';
import { InvalidVerseException } from './InvalidVerseException';

describe('Verse class', () => {
  it('should return a valid verse object when instantiated with a string having length equal to 15', () => {
    const verseOf15Character = 'Je me figure ce';
    const verse = new Verse(verseOf15Character);
    expect(verse.getVerse()).toEqual(verseOf15Character);
  });
  it('should return a valid verse object when instantiated with a string having length greater than to 15', () => {
    const verseOfMoreThan15Character =
      'Je me figure ce zouave qui joue au zilophone en buvant du wisky';
    const verse = new Verse(verseOfMoreThan15Character);
    expect(verse.getVerse()).toEqual(verseOfMoreThan15Character);
  });
  it('should throw an InvalidVerseException when instantiated with a string having length less than 15', () => {
    expect(() => new Verse('azerty')).toThrow(InvalidVerseException);
  });
  it('should throw an InvalidVerseException when instantiated with a null string', () => {
    expect(() => new Verse(null)).toThrow(InvalidVerseException);
  });
});
