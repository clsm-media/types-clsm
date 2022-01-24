declare namespace Query {
  namespace GetPaginatedAccessCodesRedeemed {
    interface Response {
      getPaginatedAccessCodesRedeemed: {
        data: Entity.IAccessCodesRedeemed[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter?: {
        searchTerm?: string;
        batchId?: string;
      };
    }
  }
}