declare namespace Mutation {
  namespace DeleteIssue {

    interface Response {
      deleteIssue: boolean;
    }

    interface Variables {
      input: {
        issueId: string;
      };
    }
  }
}
