import { Poem } from '../poem/Poem';

export class PoemsSequence {
  private headPoems: Array<Poem>;
  private currentPoem: Poem | null;
  private tailPoems: Array<Poem>;
  constructor(poems: Array<Poem>) {
    this.headPoems = [];
    this.initializePoemSequence(poems);
  }

  private initializePoemSequence = (poems: Array<Poem>) => {
    if (poems.length) {
      const [firstPoem, ...rest] = poems;
      this.currentPoem = firstPoem;
      this.tailPoems = rest;
    } else {
      this.currentPoem = null;
      this.tailPoems = [];
    }
  };

  private updatePoemSequence = () => {
    if (this.currentPoem) {
      this.headPoems = [...this.headPoems, this.currentPoem];
      const [firstPoemInTheList, ...tail] = this.tailPoems;
      this.currentPoem = firstPoemInTheList ? firstPoemInTheList : null;
      this.tailPoems = tail;
    }
  };

  public getNextPoem = (): Poem | null => {
    const currentPoem = this.currentPoem;
    this.updatePoemSequence();
    return currentPoem;
  };
}
