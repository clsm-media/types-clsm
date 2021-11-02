declare namespace Query {
  namespace GetPaginatedConversationsForFeed {
    interface Response {
      getPaginatedConversationsForFeed: {
        data: Entity.IConversation[];
        page: Helper.Pagination.IPagination;
      };
    }
  
    interface Variables {
      pagination?: Helper.Pagination.PaginationInput;
      filter: {
        tab: Entity.IConversationFeedTab;
      };
    }
  }
}