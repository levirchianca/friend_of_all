import Post from "domain/Post";

interface PostDAO {
  create(post: Post): Promise<Post>;
  list(title?: String, description?: String): Promise<Post[]>;
  getById(id: string): Promise<Post | undefined>;
}

export default PostDAO;