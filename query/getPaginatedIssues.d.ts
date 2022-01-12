declare namespace Query {
  namespace GetPaginatedIssues {
    import IConversationIssueStatusType = Entity.IConversationIssueStatusType;

    interface Response {
      getPaginatedIssues: {
        data: Entity.IIssue[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter?: {
        searchTerm?: string;
        status?: IConversationIssueStatusType;
      };
    }
  }
}