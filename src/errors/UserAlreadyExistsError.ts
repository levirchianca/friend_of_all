import ErrorBase from "./ErrorBase";

class UserAlreadyExistsError extends ErrorBase {
  constructor (message: string = "User already Exists") {
    super(message);
  }
}

export default UserAlreadyExistsError;