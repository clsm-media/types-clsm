declare namespace Query {
  namespace GetPaginatedUsers {
    interface Response {
      getPaginatedUsers: {
        data: Entity.IUser[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter?: {
        searchTerm?: string;
        conversationId?: string;
      };
    }
  }
}