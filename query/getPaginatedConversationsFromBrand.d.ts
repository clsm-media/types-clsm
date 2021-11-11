declare namespace Query {
  namespace GetPaginatedConversationsFromBrand {
    interface Response {
      getPaginatedConversationsFromUser: {
        data: Entity.IConversation[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter: {
        brandId: string;
        searchTerm?: string;
      };
    }
  }
}