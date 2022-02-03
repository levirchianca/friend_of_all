abstract class ErrorBase implements Error {
  private _name: string = "ErrorBase";

  constructor (public readonly message: string) {
    if (typeof console !== undefined) {
      console.error(this.toString());
    }
  }

  toString(): string {
    return `${this._name}: ${this.message}`;
  }

  get name(): string {
    return this._name;
  }

  protected set name(name: string) {
    this._name = name;
  }
}

export default ErrorBase;