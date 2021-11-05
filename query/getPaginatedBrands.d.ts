declare namespace Query {
  namespace GetPaginatedBrands {
    interface Response {
      getPaginatedBrands: {
        data: Entity.IBrand[];
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