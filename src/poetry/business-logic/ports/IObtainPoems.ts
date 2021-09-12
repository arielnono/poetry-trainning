import { Poem } from '../entities/poem/Poem';

export interface IObtainPoems {
  getPoems: () => Array<Poem>;
}
