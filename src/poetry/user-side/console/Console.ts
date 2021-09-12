#! /usr/bin/env node

import { createInterface } from 'readline';
import { PoetryReader } from '../../business-logic/use-cases/PoetryReader';
import { IRequestPoem } from '../../business-logic/ports/IRequestPoem';
import { PoetryLibraryFileAdapter } from '../../server-side/PoetryLibraryFileAdapter';
import { ConsoleAdapter } from './ConsoleAdapter';

const [, , ...args] = process.argv;

const poetryLibraryFileAdapter = new PoetryLibraryFileAdapter(args[0]);
const poetryReader: IRequestPoem = new PoetryReader(poetryLibraryFileAdapter);
const consoleAdapter = new ConsoleAdapter(poetryReader);

const configuredReadLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(consoleAdapter.ask());

configuredReadLine.question('Want another poem? y/n\n', (answer) => {
  if (answer === 'y') {
    console.log(consoleAdapter.ask());
  }
  configuredReadLine.close();
});
