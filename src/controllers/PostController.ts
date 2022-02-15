import PostDAO from "DAO/PostDAO";
import Post from "domain/Post";

abstract class PostController {
  constructor(private postDAO: PostDAO) {}

  createPost(post: Post): Promise<Post> {
    return this.postDAO.create(post);
  }

  async listPost(
    title?: string,
    description?: string,
    orderBy?: string,
    direction?: string,
    page: number = 1,
    limite: number = 15
  ): Promise<Post[]> {
    let posts = await this.list(title, description);

    posts = await this.order(posts, orderBy, direction);

    // Paginação
    const offset = (page - 1) * limite; // índide do primeiro post
    const lastposition = offset + limite; // índice do último post

    if (lastposition < posts.length) {
      return posts.slice(offset, lastposition);
    } else if (offset < posts.length) {
      return posts.slice(offset);
    } else {
      return [] as Post[];
    }
  }

  protected abstract list(title?: string, description?: string): Promise<Post[]>;

  protected abstract order(posts: Post[], by?: string, direction?: string): Promise<Post[]>;

  public async getPost(id: string): Promise<Post | undefined> {
    return await this.postDAO.getById(id);
  }
}

export default PostController;
