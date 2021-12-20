declare namespace Query {
  namespace GetPaginatedBatches {
    interface Response {
      getPaginatedBatches: {
        data: Entity.IAccessCodesBatchDetails[];
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