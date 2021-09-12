export class PoetryLibraryFileAdapterException extends Error {
  constructor(message: string) {
    super(message);
    this.name = PoetryLibraryFileAdapterException.name;
  }
}
