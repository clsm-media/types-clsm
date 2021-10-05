declare namespace Helper {  
  namespace Pagination {
    interface PaginationInput {
      page: number;
      size: number;
    }

    type SortOrder = 'ASC' | 'DESC';

    interface SortInput {
      field: string;
      order: SortOrder;
    }

    interface IPagination {
      currentPage: number;
      hasNext?: boolean;
      nextPage?: number;
      hasPrevious?: boolean;
      previousPage?: number;
      pages: number;
      pageSize: number;
      pageTotal: number;
      total: number;
    }
  }
}