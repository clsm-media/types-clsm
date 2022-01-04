declare namespace Query {
  namespace GetPaginatedAccessCodes {
    interface Response {
      getPaginatedAccessCodes: {
        data: Entity.IAccessCodes[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter?: {
        searchTerm?: string;
        showOnlyRedeemed?: boolean;
      };
    }
  }
}