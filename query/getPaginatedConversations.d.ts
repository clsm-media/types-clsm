declare namespace Query {
  namespace GetPaginatedConversations {
    interface Response {
      getPaginatedConversations: {
        data: Entity.IConversation[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter?: {
        searchTerm?: string;
        status?: Entity.IConversationStatus;
      };
    }
  }
}