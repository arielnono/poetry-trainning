export class InvalidVerseException extends Error {
  constructor(message: string) {
    super(message);
    this.name = InvalidVerseException.name;
  }
}
