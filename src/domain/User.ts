class User {
  private _id: string;
  private _email: string;
  private _password: string;
  private _name: string;

  constructor(email: string, password: string, name: string, id?: string) {
    this._email = email;
    this._password = password;
    this._name = name;

    if (id) {
      this._id = id;
    }
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get name(): string {
    return this._name;
  }

  set id(id: string) {
    this._id = id;
  }

  set email(email: string) {
    this._email = email;
  }

  set password(password: string) {
    this._password = password;
  }

  set name(name: string) {
    this._name = name;
  }
}

export default User;
