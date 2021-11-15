declare namespace Query {
  namespace Search {
    interface Response {
      search: {
        data: (Entity.IUser | Entity.IConversation | Entity.IBrand)[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      filter?: {
        searchTerm: string;
        isFavorite?: boolean;
      };
    }
  }
}