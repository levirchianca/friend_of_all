import Post from "domain/Post";

interface PostDAO {
  create(post: Post): Promise<Post>;
  list(title?: string, description?: string): Promise<Post[]>;
}

export default PostDAO;
