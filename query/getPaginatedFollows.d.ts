declare namespace Query {
  namespace GetPaginatedFollows {
    interface Response {
      getPaginatedFollows: {
        data: Entity.IUser[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      filter: {
        userId: string;
        searchTerm?: string;
        followType: 'FOLLOWERS' | 'FOLLOWINGS';
      };
    }
  }
}