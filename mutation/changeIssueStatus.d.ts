declare namespace Mutation {
  namespace ChangeIssueStatus {
    import IIssue = Entity.IIssue;

    interface Response {
      changeIssueStatus: IIssue;
    }

    interface Variables {
      input: {
        issueId: string;
        currentStatus: string;
        note?: string;
      };
    }
  }
}
