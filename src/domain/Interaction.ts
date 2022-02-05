import Post from "./Post";
import User from "./User";

abstract class Interaction {
  protected _post: Post;
  protected _user: User;

  constructor(post: Post, user: User) {
    this._post = post;
    this._user = user;
  }

  get post(): Post {
    return this._post;
  }

  get user(): User {
    return this._user;
  }

  set post(post: Post) {
    this._post = post;
  }

  set user(user: User) {
    this._user = user;
  }
}

export default Interaction;
