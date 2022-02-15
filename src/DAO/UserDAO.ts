import User from "../domain/User";

interface UserDAO {
  create(user: User): Promise<User>;
  get(email: string, password: string): Promise<User | undefined>;
  getByEmail(email: string): Promise<User | undefined>;
  getById(id: string): Promise<User | undefined>;
}

export default UserDAO;
