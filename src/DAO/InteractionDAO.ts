import Interaction from "domain/Interaction";

interface InteractionDAO {
  create(interaction: Interaction): Promise<Interaction>;
  listByPost(postId: String): Promise<Interaction[]>;
}

export default InteractionDAO;