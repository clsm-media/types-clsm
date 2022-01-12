declare namespace Mutation {
  namespace CreateIssue {
    interface Response {
      createIssue?: Boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        issue: string;
      };
    }
  }
}
