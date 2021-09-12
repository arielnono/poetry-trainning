import { IRequestPoem } from '../../business-logic/ports/IRequestPoem';

export class ConsoleAdapter {
  private poemRequest: IRequestPoem;
  constructor(request: IRequestPoem) {
    this.poemRequest = request;
  }

  public ask = () => {
    const data = this.poemRequest.getNextPoem()?.getPoemText();
    if (data) {
      return `Here is a Poem for you \n ${data}`;
    }
    return `Sorry there is no more poem \n`;
  };
}
