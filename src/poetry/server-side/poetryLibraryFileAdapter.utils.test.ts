import { isPoemJsonSchemaValid } from './poetryLibraryFileAdapter.utils';

describe('isPoemJsonSchemaValid function', () => {
  const poemJsonContentWithOnePoem = {
    poemes: [
      {
        titre: 'Amour',
        autheur: 'Pierre de Ronsard',
        poeme: [
          {
            strophes: [
              'Jà du prochain hiver je prévois la tempête,',
              'Jà cinquante et six ans ont neigé sur ma tête.',
            ],
          },
          {
            strophes: [
              'Et de prendre congé du plus beau de mes jours.',
              'Villeroy, si bien que nulle envie',
            ],
          },
        ],
      },
    ],
  };
  const poemJsonContentWithInvalidStanza = {
    poemes: [
      {
        titre: 'Amour',
        autheur: 'Pierre de Ronsard',
        poeme: [
          {
            strophes: ['Jà du prochain hiver je prévois la tempête,'],
          },
          {
            strophes: [
              'Et de prendre congé du plus beau de mes jours.',
              'Villeroy, si bien que nulle envie',
            ],
          },
        ],
      },
    ],
  };
  const poemJsonContentWithTwoPoem = {
    poemes: [
      {
        titre: 'Amour',
        autheur: 'Pierre de Ronsard',
        poeme: [
          {
            strophes: [
              'Jà du prochain hiver je prévois la tempête,',
              'Jà cinquante et six ans ont neigé sur ma tête.',
            ],
          },
          {
            strophes: [
              'Et de prendre congé du plus beau de mes jours.',
              'Villeroy, si bien que nulle envie',
            ],
          },
        ],
      },
      {
        titre: 'Poésie',
        autheur: 'Marceline Desbordes-Valmore',
        poeme: [
          {
            strophes: ['Ô douce Poésie !', 'Couvre de quelques fleurs'],
          },
          {
            strophes: ['La triste fantaisie', 'Qui fait couler mes pleurs ;'],
          },
          {
            strophes: [
              'Et de prendre congé du plus beau de mes jours.',
              'Villeroy, si bien que nulle envie',
            ],
          },
        ],
      },
    ],
  };
  it('should return false when the json file has poem with invalid stanza', () => {
    expect(isPoemJsonSchemaValid(poemJsonContentWithInvalidStanza)).toBeFalsy();
  });
  it('should return true when the json file has 1 valid poem', () => {
    expect(isPoemJsonSchemaValid(poemJsonContentWithOnePoem)).toBeTruthy();
  });
  it('should return true when the json file has 2 valid poem', () => {
    expect(isPoemJsonSchemaValid(poemJsonContentWithTwoPoem)).toBeTruthy();
  });
});
