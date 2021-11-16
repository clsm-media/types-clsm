declare namespace Query {
  namespace GetPaginatedFollowsForBrand {
    interface Response {
      getPaginatedFollowsForBrand: {
        data: (Entity.IUser | Entity.IBrand)[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      filter: {
        brandId: string;
        searchTerm?: string;
        followType: 'FOLLOWERS' | 'FOLLOWINGS';
      };
    }
  }
}