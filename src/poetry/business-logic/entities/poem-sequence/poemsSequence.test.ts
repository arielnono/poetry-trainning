import { Verse } from '../verse/Verse';
import { Stanza } from '../stanza/Stanza';
import { Poem } from '../poem/Poem';
import { PoemsSequence } from './PoemsSequence';

describe('PoemsSequence class', () => {
  it('should not throw an exception when instanced with 2 poems', () => {
    const verseOf15Character = 'Je me figure ce';
    const title = 'Le bleu écarlate';
    const author = 'Armel Dubois';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const stanza = new Stanza([verse1, verse2]);
    const stanza2 = new Stanza([verse1, verse2]);
    const poem1 = new Poem(title, author, [stanza, stanza2]);
    const poem2 = new Poem(title, author, [stanza2, stanza]);
    expect(() => new PoemsSequence([poem1, poem2])).not.toThrow(Error);
  });
  it('should not throw an exception when instanced with 1 poem', () => {
    const verseOf15Character = 'Je me figure ce';
    const title = 'Le bleu écarlate';
    const author = 'Armel Dubois';
    const verse1 = new Verse(verseOf15Character);
    const verse2 = new Verse(verseOf15Character);
    const stanza = new Stanza([verse1, verse2]);
    const stanza2 = new Stanza([verse1, verse2]);
    const poem1 = new Poem(title, author, [stanza, stanza2]);
    expect(() => new PoemsSequence([poem1])).not.toThrow(Error);
  });
  it('should not throw an exception when instanced with 0 poem', () => {
    expect(() => new PoemsSequence([])).not.toThrow(Error);
  });

  describe('getNextPoem function', () => {
    it('should return null when the poems list has no items', () => {
      const poemSequence = new PoemsSequence([]);
      expect(poemSequence.getNextPoem()).toBeNull();
    });
    it('should return the first poem when the poems list has one items and it is call the first time', () => {
      const verseOf15Character = 'Je me figure ce zouave qui joue';
      const title = 'Le bleu écarlate';
      const author = 'Armel Dubois';
      const verse1 = new Verse(verseOf15Character);
      const verse2 = new Verse(verseOf15Character);
      const stanza = new Stanza([verse1, verse2]);
      const stanza2 = new Stanza([verse2, verse1]);
      const poem1 = new Poem(title, author, [stanza, stanza2]);
      const poemSequence = new PoemsSequence([poem1]);
      expect(poemSequence.getNextPoem()?.getPoemText()).toBe(
        poem1.getPoemText(),
      );
    });
    it('should return null when the poems list has one items and it is call the second time', () => {
      const verseOf15Character = 'Je me figure ce';
      const title = 'Le bleu écarlate';
      const author = 'Armel Dubois';
      const verse1 = new Verse(verseOf15Character);
      const verse2 = new Verse(verseOf15Character);
      const stanza = new Stanza([verse1, verse2]);
      const stanza2 = new Stanza([verse1, verse2]);
      const poem1 = new Poem(title, author, [stanza, stanza2]);
      const poemSequence = new PoemsSequence([poem1]);
      expect(poemSequence.getNextPoem()?.getPoemText()).toBe(
        poem1.getPoemText(),
      );
      expect(poemSequence.getNextPoem()).toBeNull();
    });
    it('should return the first poem when the poems list has 2 items and it is call the first time', () => {
      const verseOf15Character = 'Je me figure ce';
      const title = 'Le bleu écarlate';
      const author = 'Armel Dubois';
      const verse1 = new Verse(verseOf15Character);
      const verse2 = new Verse(verseOf15Character);
      const stanza = new Stanza([verse1, verse2]);
      const stanza2 = new Stanza([verse1, verse2]);
      const poem1 = new Poem(title, author, [stanza, stanza2]);
      const poem2 = new Poem(title, author, [stanza2, stanza]);
      const poemSequence = new PoemsSequence([poem1, poem2]);
      expect(poemSequence.getNextPoem()?.getPoemText()).toBe(
        poem1.getPoemText(),
      );
    });
    it('should return the second poem when the poems list has 2 items and it is call the second time', () => {
      const verseOf15Character = 'Je me figure ce';
      const title = 'Le bleu écarlate';
      const author = 'Armel Dubois';
      const verse1 = new Verse(verseOf15Character);
      const verse2 = new Verse(verseOf15Character);
      const stanza = new Stanza([verse1, verse2]);
      const stanza2 = new Stanza([verse1, verse2]);
      const poem1 = new Poem(title, author, [stanza, stanza2]);
      const poem2 = new Poem(title, author, [stanza2, stanza]);
      const poemSequence = new PoemsSequence([poem1, poem2]);
      expect(poemSequence.getNextPoem()?.getPoemText()).toBe(
        poem1.getPoemText(),
      );
      expect(poemSequence.getNextPoem()?.getPoemText()).toBe(
        poem2.getPoemText(),
      );
    });
    it('should return null when the poems list has 2 items and it is call the third time', () => {
      const verseOf15Character = 'Je me figure ce';
      const title = 'Le bleu écarlate';
      const author = 'Armel Dubois';
      const verse1 = new Verse(verseOf15Character);
      const verse2 = new Verse(verseOf15Character);
      const stanza = new Stanza([verse1, verse2]);
      const stanza2 = new Stanza([verse1, verse2]);
      const poem1 = new Poem(title, author, [stanza, stanza2]);
      const poem2 = new Poem(title, author, [stanza2, stanza]);
      const poemSequence = new PoemsSequence([poem1, poem2]);
      expect(poemSequence.getNextPoem()?.getPoemText()).toBe(
        poem1.getPoemText(),
      );
      expect(poemSequence.getNextPoem()?.getPoemText()).toBe(
        poem2.getPoemText(),
      );
      expect(poemSequence.getNextPoem()).toBeNull();
    });
  });
});
