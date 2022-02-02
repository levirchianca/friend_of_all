class Post {
  private _id: String;
  private _title: String;
  private _description: String;
  private _createdAt: String;

  constructor (id: String, title: String, description: String, createdAt: String) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._createdAt = createdAt;
  }

  get id(): String {
    return this._id;
  }

  get title(): String {
    return this._title;
  }

  get description(): String {
    return this._description;
  }

  get createdAt(): String {
    return this._createdAt;
  }
  
  set id(id: String) {
    this._id = id;
  }

  set title(title: String) {
    this._title = title;
  }

  set description(description: String) {
    this._description = description;
  }

  set createdAt(createdAt: String) {
    this._createdAt = createdAt;
  }
}


export default Post;