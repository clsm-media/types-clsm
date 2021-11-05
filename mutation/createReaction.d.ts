declare namespace Mutation {
  namespace CreateReaction {
    interface Response {
      createReaction?: boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        reactionType: Entity.IReactionType;
      }
    }
  }
}
