declare namespace Mutation {
  namespace AddIssueNote {
    import IIssue = Entity.IIssue;

    interface Response {
      addIssueNote: IIssue;
    }

    interface Variables {
      input: {
        issueId: string;
        note: string;
      };
    }
  }
}
