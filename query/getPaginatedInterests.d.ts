declare namespace Query {
  namespace GetPaginatedInterests {
    interface Response {
      getPaginatedConversations: {
        data: Entity.IInterest[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter?: {
        searchTerm?: string;
      };
    }
  }
}