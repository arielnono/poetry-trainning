import { IObtainPoems } from '../ports/IObtainPoems';
import { IRequestPoem } from '../ports/IRequestPoem';
import { PoemsSequence } from '../entities/poem-sequence/PoemsSequence';

export class PoetryReader implements IRequestPoem {
  private poemsSequence: PoemsSequence;
  constructor(poetryLibrary: IObtainPoems) {
    this.poemsSequence = new PoemsSequence(poetryLibrary.getPoems());
  }

  public getNextPoem = () => {
    return this.poemsSequence.getNextPoem();
  };
}
