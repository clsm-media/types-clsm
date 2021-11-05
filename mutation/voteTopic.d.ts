declare namespace Mutation {
  namespace VoteTopic {
    interface Response {
      voteTopic?: Entity.ITopic;
    }

    interface Variables {
      input: {
        topicId: string;
      }
    }
  }
}
