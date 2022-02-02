import ErrorBase from "./ErrorBase";

class InvalidTokenError extends ErrorBase {
  constructor (message: string = "Invalid Token") {
    super(message);
  }
}

export default InvalidTokenError;