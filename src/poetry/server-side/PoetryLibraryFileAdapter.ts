import { IObtainPoems } from '../business-logic/ports/IObtainPoems';
import { Poem } from '../business-logic/entities/poem/Poem';
import * as fs from 'fs';
import { PoetryLibraryFileAdapterException } from './PoetryLibraryFileAdapterException';
import { convertJsonToPoems } from './poetryLibraryFileAdapter.utils';

export class PoetryLibraryFileAdapter implements IObtainPoems {
  private poems: Array<Poem>;
  constructor(filePath: string) {
    if (!filePath) {
      throw new PoetryLibraryFileAdapterException(
        "The file path provided can't be empty",
      );
    }
    if (!fs.existsSync(filePath)) {
      throw new PoetryLibraryFileAdapterException(
        'The file path provided should point to an existing file',
      );
    }
    const rawFile = fs.readFileSync(filePath, 'utf-8');
    this.poems = convertJsonToPoems(JSON.parse(rawFile));
  }

  public getPoems = () => this.poems;
}
