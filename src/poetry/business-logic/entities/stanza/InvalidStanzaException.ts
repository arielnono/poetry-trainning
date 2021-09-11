export class InvalidStanzaException extends Error {
  constructor(message: string) {
    super(message);
    this.name = InvalidStanzaException.name;
  }
}
