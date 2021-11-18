declare namespace Query {
  namespace GetPaginatedUsers {
    interface Response {
      getPaginatedUsers: {
        data: (Entity.IUser | Entity.IBrand)[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter?: {
        searchTerm?: string;
        conversationId?: string;
        brandId?: string;
      };
    }
  }
}