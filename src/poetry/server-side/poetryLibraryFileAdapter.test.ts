import { PoetryLibraryFileAdapterException } from './PoetryLibraryFileAdapterException';
import { PoetryLibraryFileAdapter } from './PoetryLibraryFileAdapter';

/* eslint-disable @typescript-eslint/no-var-requires */
describe('PoetryLibraryFileAdapter class', () => {
  it('should no throw an exception when instantiated with existing file path', () => {
    const fs = require('fs');
    fs.existsSync = jest.fn().mockImplementation(() => true);

    expect(() => new PoetryLibraryFileAdapter('file-path')).not.toThrow(
      PoetryLibraryFileAdapterException,
    );
  });
  it('should no throw an exception when instantiated with  non existing file path', () => {
    const fs = require('fs');
    fs.existsSync = jest.fn().mockImplementation(() => false);

    expect(() => new PoetryLibraryFileAdapter('file-path')).toThrow(
      PoetryLibraryFileAdapterException,
    );
  });
  it('should no throw an exception when instantiated with empty file path', () => {
    const fs = require('fs');
    fs.existsSync = jest.fn().mockImplementation(() => false);

    expect(() => new PoetryLibraryFileAdapter('')).toThrow(
      PoetryLibraryFileAdapterException,
    );
  });

  describe('getPoems function', () => {
    it('should return 0 poems when the file return an empty string', () => {
      const fs = require('fs');
      fs.existsSync = jest.fn().mockImplementation(() => true);
      fs.readFileSync = jest.fn().mockImplementation(() => null);
      const poetryLibraryFileAdapter = new PoetryLibraryFileAdapter(
        'fake-name-path',
      );
      expect(poetryLibraryFileAdapter.getPoems().length).toBe(0);
    });
    it('should return 0 poems when the file return an empty json', () => {
      const fs = require('fs');
      fs.existsSync = jest.fn().mockImplementation(() => true);
      fs.readFileSync = jest.fn().mockImplementation(() => '{}');
      const poetryLibraryFileAdapter = new PoetryLibraryFileAdapter(
        'fake-name-path',
      );
      expect(poetryLibraryFileAdapter.getPoems().length).toBe(0);
    });
    it('should return 0 poems when the file return an json not respecting the schema', () => {
      const fs = require('fs');
      fs.existsSync = jest.fn().mockImplementation(() => true);
      fs.readFileSync = jest.fn().mockImplementation(() => '{"toto":"titi"}');
      const poetryLibraryFileAdapter = new PoetryLibraryFileAdapter(
        'fake-name-path',
      );
      expect(poetryLibraryFileAdapter.getPoems().length).toBe(0);
    });
    it('should return 1 poems when the file return 1 poem', () => {
      const fileContentMock = {
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

      const firstPoemFromFile = fileContentMock.poemes[0];
      const fs = require('fs');
      fs.existsSync = jest.fn().mockImplementation(() => true);
      fs.readFileSync = jest
        .fn()
        .mockImplementation(() => JSON.stringify(fileContentMock));
      const poetryLibraryFileAdapter = new PoetryLibraryFileAdapter(
        'fake-name-path',
      );
      expect(poetryLibraryFileAdapter.getPoems().length).toBe(1);
      expect(poetryLibraryFileAdapter.getPoems()[0].getPoemText()).toBe(
        `${firstPoemFromFile.titre}\n\n${firstPoemFromFile.poeme[0].strophes[0]}\n${firstPoemFromFile.poeme[0].strophes[1]}\n\n${firstPoemFromFile.poeme[1].strophes[0]}\n${firstPoemFromFile.poeme[1].strophes[1]}\n\n--- ${firstPoemFromFile.autheur}`,
      );
    });
    it('should return 2 poems when the file return 2 poem', () => {
      const fileContentMock = {
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
                strophes: [
                  'La triste fantaisie',
                  'Qui fait couler mes pleurs ;',
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
      const firstPoemFromFile = fileContentMock.poemes[0];
      const secondPoemFromFile = fileContentMock.poemes[1];
      const fs = require('fs');
      fs.existsSync = jest.fn().mockImplementation(() => true);
      fs.readFileSync = jest
        .fn()
        .mockImplementation(() => JSON.stringify(fileContentMock));
      const poetryLibraryFileAdapter = new PoetryLibraryFileAdapter(
        'fake-name-path',
      );
      expect(poetryLibraryFileAdapter.getPoems().length).toBe(2);
      expect(poetryLibraryFileAdapter.getPoems()[0].getPoemText()).toBe(
        `${firstPoemFromFile.titre}\n\n${firstPoemFromFile.poeme[0].strophes[0]}\n${firstPoemFromFile.poeme[0].strophes[1]}\n\n${firstPoemFromFile.poeme[1].strophes[0]}\n${firstPoemFromFile.poeme[1].strophes[1]}\n\n--- ${firstPoemFromFile.autheur}`,
      );

      expect(poetryLibraryFileAdapter.getPoems()[1].getPoemText()).toBe(
        `${secondPoemFromFile.titre}\n\n${secondPoemFromFile.poeme[0].strophes[0]}\n${secondPoemFromFile.poeme[0].strophes[1]}\n\n${secondPoemFromFile.poeme[1].strophes[0]}\n${secondPoemFromFile.poeme[1].strophes[1]}\n\n${secondPoemFromFile.poeme[2].strophes[0]}\n${secondPoemFromFile.poeme[2].strophes[1]}\n\n--- ${secondPoemFromFile.autheur}`,
      );
    });
  });
});
