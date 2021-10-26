declare namespace Mutation {
  namespace DisableTopic {
    interface Response {
      disableTopic?: Boolean;
    }

    interface Variables {
      input: {
        topicId: string;
      }
    }
  }
}
