export class InvalidPoemException extends Error {
  constructor(message: string) {
    super(message);
    this.name = InvalidPoemException.name;
  }
}
