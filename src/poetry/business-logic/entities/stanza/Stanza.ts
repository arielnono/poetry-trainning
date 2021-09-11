import { Verse } from '../verse/Verse';
import { InvalidStanzaException } from './InvalidStanzaException';

export class Stanza {
  private verses: Array<Verse>;
  private static MINIMUM_STANZA_VERSES_ALLOWED = 2;
  private static MAXIMUM_STANZA_VERSES_ALLOWED = 8;
  constructor(verses: Array<Verse>) {
    if (!Stanza.isValidStanza(verses)) {
      throw new InvalidStanzaException(
        `A stanza should have at least ${Stanza.MINIMUM_STANZA_VERSES_ALLOWED} verses and at most ${Stanza.MAXIMUM_STANZA_VERSES_ALLOWED}`,
      );
    }
    this.verses = verses;
  }

  private static isValidStanza = (verses: Array<Verse>) =>
    verses &&
    verses.length <= Stanza.MAXIMUM_STANZA_VERSES_ALLOWED &&
    verses.length >= Stanza.MINIMUM_STANZA_VERSES_ALLOWED;
  public getStanzaText = () =>
    this.verses.reduce((previousVerseText, currentVerse, index) => {
      if (index !== 0) {
        return `${previousVerseText}\n${currentVerse.getVerse()}`;
      }
      return currentVerse.getVerse();
    }, '');
}
