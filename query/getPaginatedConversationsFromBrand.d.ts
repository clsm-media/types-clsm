declare namespace Query {
  namespace GetPaginatedConversationsFromBrand {
    interface Response {
      getPaginatedConversationsFromBrand: {
        data: Entity.IConversation[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      filter: {
        brandId: string;
        searchTerm?: string;
      };
    }
  }
}