class Post {
  private _id: string;
  private _title: string;
  private _description: string;
  private _createdAt: string;

  constructor(
    id: string,
    title: string,
    description: string,
    createdAt: string
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._createdAt = createdAt;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set id(id: string) {
    this._id = id;
  }

  set title(title: string) {
    this._title = title;
  }

  set description(description: string) {
    this._description = description;
  }

  set createdAt(createdAt: string) {
    this._createdAt = createdAt;
  }
}

export default Post;
