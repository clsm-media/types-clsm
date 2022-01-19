declare namespace Query {
  namespace GetPaginatedIssueHistory {

    import IConversationIssueType = Entity.IConversationIssueType;

    interface Response {
      getPaginatedIssueHistory: {
        data: Entity.IConversationIssue[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter?: {
        searchTerm?: string;
        issueId: string;
        eventType?: IConversationIssueType[];
      };
    }
  }
}