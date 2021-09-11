import { InvalidPoemException } from './InvalidPoemException';
import { Stanza } from '../stanza/Stanza';

const MINIMUM_ALLOWED_STANZAS = 1;
export class Poem {
  private stanzas: Array<Stanza>;
  private title: string;
  private author: string;
  constructor(title: string, author: string, stanzas: Array<Stanza>) {
    if (!title) {
      throw new InvalidPoemException('Cannot create a poem without a title');
    }
    if (!author) {
      throw new InvalidPoemException('Cannot create a poem without an author');
    }
    if (!(stanzas && stanzas.length >= MINIMUM_ALLOWED_STANZAS)) {
      throw new InvalidPoemException('Cannot create a poem without a stanza');
    }
    this.author = author;
    this.stanzas = stanzas;
    this.title = title;
  }

  private getStanzasText = () => {
    return this.stanzas.reduce((previousStanzasText, currentStanza, index) => {
      if (index !== 0) {
        return `${previousStanzasText}${this.getGapBetweenStanzas()}${currentStanza.getStanzaText()}`;
      }
      return currentStanza.getStanzaText();
    }, '');
  };

  private getAuthorText = () => `--- ${this.author}`;

  private getGapBetweenStanzas = () => '\n\n';

  public getPoemText = () => {
    return `${
      this.title
    }${this.getGapBetweenStanzas()}${this.getStanzasText()}${this.getGapBetweenStanzas()}${this.getAuthorText()}`;
  };
}
