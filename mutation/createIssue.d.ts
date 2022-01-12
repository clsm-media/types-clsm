declare namespace Mutation {
  namespace CreateIssue {
    import IIssue = Entity.IIssue;

    interface Response {
      createIssue?: IIssue;
    }

    interface Variables {
      input: {
        conversationId: string;
        issue: string;
      };
    }
  }
}
