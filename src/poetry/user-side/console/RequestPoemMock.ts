import { IRequestPoem } from 'src/poetry/business-logic/ports/IRequestPoem';
import { Poem } from 'src/poetry/business-logic/entities/poem/Poem';

export class RequestPoemMock implements IRequestPoem {
  public getNextPoem = (): Poem | null => null;
}
