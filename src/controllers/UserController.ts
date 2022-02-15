import UserDAO from "../DAO/UserDAO";
import User from "../domain/User";
import InvalidTokenError from "../errors/InvalidTokenError";
import UserAlreadyExistsError from "../errors/UserAlreadyExistsError";
import UserNotFoundError from "../errors/UserNotFoundError";
import { sign, verify } from "jsonwebtoken";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

class UserController {
  
  constructor (
    private userDAO: UserDAO,
  ) { }

  /**
   * Válida o email do usuário informado, e caso seja válido 
   * o persiste no banco
   * @param user Instância da classe User com os dados do usuário
   * @returns User com o id do banco
   */
  async createUser(user: User): Promise<User> {
    const userExists = await this.userDAO.getByEmail(user.email);

    if (userExists) {
      throw new UserAlreadyExistsError();
    }

    return await this.userDAO.create(user);
  }

  /**
   * Procura um usuário com o email e senha informado
   * @param email Email do usuário
   * @param password Senha do usuário
   * @returns Usuário caso seja encontrado, e undefined caso contrário
   */
  async getUser(email: string, password: string): Promise<User | undefined> {
    return this.userDAO.get(email, password);
  }

  /**
   * Cria um token para este usuário que irá se expirar em um tempo específico
   * @param user Usuário que será logado
   */
  signin(user: User): string {
    const token = sign({}, process.env.SECRET_KEY || "default", {
      subject: user.id,
      expiresIn: 999
    });
    
    return token;
  }

  /**
   * Valida o token informado e retorna o usuário dono do token, 
   * caso o mesmo seja válido
   * @param token Token gerado ao fazer login
   */ 
  async ensuredAuthenticated(token: string): Promise<User> {
    try {
      const decoded = verify(token, process.env.SECRET_KEY || "default");

      var { sub } =  decoded as ITokenPayload;
    } catch (error) {
      throw new InvalidTokenError();
    }

    const user = await this.userDAO.getById(sub);

    if (!user) {
      throw new UserNotFoundError();
    }

    return user;
  }
}

export default UserController;