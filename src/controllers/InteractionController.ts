import Interaction from "domain/Interaction";
import InteractionDAO from "DAO/InteractionDAO";

class InteractionController {
  constructor (
    private interactionDAO: InteractionDAO,
  ) { }

  createInteraction(interaction: Interaction): Promise<Interaction> {
    return this.interactionDAO.create(interaction);
  }
  
  listInteractionByPost(postId: String): Promise<Interaction[]> {
    return this.interactionDAO.listByPost(postId);
  }
}

export default InteractionController;