import { Verse } from '../verse/Verse';
import { Poem } from './Poem';
import { InvalidPoemException } from './InvalidPoemException';
import { Stanza } from '../stanza/Stanza';

describe('Poem class', () => {
  it('should not throw an exception when instantiated with one stanza, title and author', () => {
    const verseOf15Character = 'Je me figure ce';
    const title = 'Le bleu écarlate';
    const author = 'Armel Dubois';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const stanza = new Stanza([verse1, verse2]);
    expect(() => new Poem(title, author, [stanza])).not.toThrow(
      InvalidPoemException,
    );
  });
  it('should not throw an exception when instantiated with two stanza, title and author', () => {
    const verseOf15Character = 'Je me figure ce';
    const title = 'Le bleu écarlate';
    const author = 'Armel Dubois';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const stanza = new Stanza([verse1, verse2]);
    const stanza2 = new Stanza([verse1, verse2]);
    expect(() => new Poem(title, author, [stanza, stanza2])).not.toThrow(
      InvalidPoemException,
    );
  });

  it('should throw an exception  when instantiated with one stanza, title and no author', () => {
    const verseOf15Character = 'Je me figure ce';
    const title = 'Le bleu écarlate';
    const author = null;
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const stanza = new Stanza([verse1, verse2]);
    expect(() => new Poem(title, author, [stanza])).toThrow(
      InvalidPoemException,
    );
  });

  it('should throw an exception  when instantiated with one stanza, author no title', () => {
    const verseOf15Character = 'Je me figure ce';
    const title = null;
    const author = 'Armel Dubois';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const stanza = new Stanza([verse1, verse2]);
    expect(() => new Poem(title, author, [stanza])).toThrow(
      InvalidPoemException,
    );
  });

  it('should throw an exception  when instantiated with 0 stanza, author, title', () => {
    const title = null;
    const author = 'Armel Dubois';
    expect(() => new Poem(title, author, [])).toThrow(InvalidPoemException);
  });

  it('should throw an exception  when instantiated with null stanza, author, title', () => {
    const title = null;
    const author = 'Armel Dubois';
    expect(() => new Poem(title, author, null)).toThrow(InvalidPoemException);
  });

  describe('getPoemText function', () => {
    it('should return formated poem text when called whit a title, an author and 1 stanza', () => {
      const verseOf15Character = 'Je me figure ce';
      const title = 'Le bleu écarlate';
      const author = 'Armel Dubois';
      const verse1 = new Verse(verseOf15Character);
      const verse2 = new Verse(verseOf15Character);
      const stanza = new Stanza([verse1, verse2]);
      const poem = new Poem(title, author, [stanza]);
      const expectedResult = `${title}\n\n${verse1.getVerse()}\n${verse2.getVerse()}\n\n--- ${author}`;

      expect(poem.getPoemText()).toBe(expectedResult);
    });
    it('should return formated poem text when called whit a title, an author and  2 stanzas', () => {
      const verseOf15Character = 'Je me figure ce';
      const verseOf15Character2 = 'Je suis trop content! youpi';
      const title = 'Le bleu écarlate';
      const author = 'Armel Dubois';
      const verse1 = new Verse(verseOf15Character);
      const verse2 = new Verse(verseOf15Character);
      const verse3 = new Verse(verseOf15Character2);
      const verse4 = new Verse(verseOf15Character);
      const stanza = new Stanza([verse1, verse2]);
      const stanza2 = new Stanza([verse3, verse4]);
      const poem = new Poem(title, author, [stanza, stanza2]);
      const expectedResult = `${title}\n\n${verse1.getVerse()}\n${verse2.getVerse()}\n\n${verse3.getVerse()}\n${verse4.getVerse()}\n\n--- ${author}`;

      expect(poem.getPoemText()).toBe(expectedResult);
    });
  });
});
