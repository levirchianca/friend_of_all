import ErrorBase from "./ErrorBase";

class InvalidTokenError extends ErrorBase {
  constructor (message: string = "Invalid Token") {
    super(message);
    this.name = "InvalidTokenError";
  }
}

export default InvalidTokenError;