declare namespace Query {
  namespace GetPaginatedListeners {
    interface Response {
      getPaginatedListeners: {
        data: Entity.IUser[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      filter?: {
        searchTerm?: string;
        conversationId: string;
        showOnlyUserSpoke?: string;
      };
    }
  }
}