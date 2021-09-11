import { InvalidVerseException } from './InvalidVerseException';

export class Verse {
  private verse: string;
  private static MINIMUM_VERSE_LENGTH = 15;

  constructor(verse: string) {
    if (!Verse.isVerseValid(verse)) {
      throw new InvalidVerseException(
        `the verse ${verse} provided  has a length les than ${Verse.MINIMUM_VERSE_LENGTH}`,
      );
    }
    this.verse = verse;
  }

  private static isVerseValid = (verseToValidate: string) =>
    verseToValidate && verseToValidate.length >= Verse.MINIMUM_VERSE_LENGTH;

  public getVerse = () => this.verse;
}
