import Post from "domain/Post";

interface PostDAO {
  create(post: Post): Promise<Post>;
  list(title?: string, description?: string): Promise<Post[]>;
  getById(id: string): Promise<Post | undefined>;
}

export default PostDAO;
