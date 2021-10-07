declare namespace Query {
  namespace GetPaginatedAdmins {
    interface Response {
      getPaginatedAdmins: {
        data: Entity.IAdmin[];
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