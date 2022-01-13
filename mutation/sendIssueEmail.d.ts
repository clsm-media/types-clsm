declare namespace Mutation {
  namespace SendIssueEmail {

    interface Response {
      sendIssueEmail: boolean;
    }

    interface Variables {
      input: {
        issueId: string;
        email: string;
        note?: string;
      };
    }
  }
}
