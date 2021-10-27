declare namespace Query {
  namespace GetPaginatedConversationsFromUser {
    interface Response {
      getPaginatedConversationsFromUser: {
        data: Entity.IConversation[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      sort?: Helper.Pagination.SortInput[];
      filter: {
        userId: string;
        searchTerm?: string;
        tab: Entity.IConversationEventsTab;
      };
    }
  }
}