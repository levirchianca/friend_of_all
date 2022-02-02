import Post from "domain/Post";

interface PostDAO {
  create(post: Post): Promise<Post>;
  list(title?: String, description?: String): Promise<Post[]>;
}

export default PostDAO;