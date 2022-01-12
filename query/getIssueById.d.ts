declare namespace Query {
  namespace GetIssueById {
    import IIssue = Entity.IIssue;

    interface Response {
      getIssueById: IIssue;
    }
  
    interface Variables {
      input: {
        issueId: string;
      }
    }
  }
}