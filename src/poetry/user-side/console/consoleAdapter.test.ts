/* eslint-disable @typescript-eslint/no-var-requires */
import { Verse } from '../../business-logic/entities/verse/Verse';
import { Stanza } from '../../business-logic/entities/stanza/Stanza';
import { Poem } from '../../business-logic/entities/poem/Poem';
import { ConsoleAdapter } from './ConsoleAdapter';
import { IRequestPoem } from 'src/poetry/business-logic/ports/IRequestPoem';

describe('ConsoleAdapter class', () => {
  const { RequestPoemMock } = require('./RequestPoemMock');
  const askMock = jest.fn();
  jest.mock('./RequestPoemMock', () => {
    return {
      RequestPoemMock: jest.fn().mockImplementation(() => {
        return {
          getNextPoem: askMock,
        };
      }),
    };
  });

  beforeEach(() => {
    askMock.mockClear();
  });
  describe('ask function', () => {
    it('should return introduction and poem when the business module return a poem', () => {
      askMock.mockImplementation(() => null);
      const poemRequest: IRequestPoem = new RequestPoemMock();
      const consoleAdapter = new ConsoleAdapter(poemRequest);
      expect(consoleAdapter.ask()).toBe(`Sorry there is no more poem \n`);
    });
    it('should return no poem sentence when the business module does not return a poem', () => {
      const verseOf15Character = 'Je me figure ce';
      const title = 'Le bleu écarlate';
      const author = 'Armel Dubois';
      const verse1 = new Verse(verseOf15Character);
      const verse2 = new Verse(verseOf15Character);
      const stanza = new Stanza([verse1, verse2]);
      const poem = new Poem(title, author, [stanza]);

      askMock.mockImplementation(() => poem);
      const poemRequest: IRequestPoem = new RequestPoemMock();
      const consoleAdapter = new ConsoleAdapter(poemRequest);
      expect(consoleAdapter.ask()).toBe(
        `Here is a Poem for you \n ${poem.getPoemText()}`,
      );
    });
  });
});
