declare namespace Query {
  namespace GetPaginatedFollows {
    interface Response {
      getPaginatedFollows: {
        data: (Entity.IUser | Entity.IBrand)[];
        page: Helper.Pagination.IPagination;
      };
    }

    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      filter: {
        userId: string;
        searchTerm?: string;
        followType: Entity.IUserFollowType;
      };
    }
  }
}