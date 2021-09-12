import { Poem } from '../entities/poem/Poem';

export interface IRequestPoem {
  getNextPoem: () => Poem | null;
}
