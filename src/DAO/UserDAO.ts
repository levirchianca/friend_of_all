import User from "../domain/User";

interface UserDAO {
  create(user: User): Promise<User>;
  get(email: String, password: String): Promise<User | undefined>;
  get(email: String): Promise<User | undefined>;
  getById(id: String): Promise<User | undefined>;
}

export default UserDAO;