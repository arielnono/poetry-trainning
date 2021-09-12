import {
  JsonPoemFileSchema,
  StanzaSchema,
} from './poetryLibraryFileAdapter.types';
import { Verse } from '../business-logic/entities/verse/Verse';
import { Stanza } from '../business-logic/entities/stanza/Stanza';
import { Poem } from '../business-logic/entities/poem/Poem';

const isPoemValid = (poems: Array<StanzaSchema>): boolean =>
  poems.length > 1 && poems[0].strophes.length > 1;

export const isPoemJsonSchemaValid = (rawPoem: JsonPoemFileSchema): boolean =>
  Boolean(
    rawPoem &&
      rawPoem.poemes &&
      rawPoem.poemes.length > 0 &&
      rawPoem.poemes[0].autheur &&
      rawPoem.poemes[0].titre &&
      isPoemValid(rawPoem.poemes[0].poeme),
  );

const buildVerses = (verses: Array<string>) =>
  verses.map((verse) => new Verse(verse));

const buildStanzas = (stanza: Array<StanzaSchema>) =>
  stanza.map((verses) => new Stanza(buildVerses(verses.strophes)));

export const convertJsonToPoems = (
  fileContent: JsonPoemFileSchema,
): Array<Poem> => {
  if (isPoemJsonSchemaValid(fileContent)) {
    return fileContent.poemes.map(
      (poem) => new Poem(poem.titre, poem.autheur, buildStanzas(poem.poeme)),
    );
  }
  return [];
};
