import Post from "./Post";
import User from "./User";

abstract class Interaction {
  protected _id: string;
  protected _post: Post;
  protected _user: User;

  constructor(post: Post, user: User, id?: string) {
    this._post = post;
    this._user = user;

    if (id) {
      this._id = id;
    }
  }

  get post(): Post {
    return this._post;
  }

  get user(): User {
    return this._user;
  }

  get id(): string {
    return this._id;
  }

  set post(post: Post) {
    this._post = post;
  }

  set user(user: User) {
    this._user = user;
  }

  set id(id: string) {
    this._id = id;
  }
}

export default Interaction;
