import Interaction from "domain/Interaction";

interface InteractionDAO {
  create(interaction: Interaction): Promise<Interaction>;
  listByPost(postId: string): Promise<Interaction[]>;
}

export default InteractionDAO;
