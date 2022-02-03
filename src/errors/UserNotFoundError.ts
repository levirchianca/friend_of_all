import ErrorBase from "./ErrorBase";

class UserNotFoundError extends ErrorBase {
  constructor (message: string = "User not found") {
    super(message);
    this.name = "UserNotFoundError";
  }
}

export default UserNotFoundError;