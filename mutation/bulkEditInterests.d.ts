declare namespace Mutation {
  namespace BulkEditInterests {
    interface Response {
      bulkEditInterests?: Entity.IInterest[];
    }

    interface Variables {
      input: {
        interestsIds: string[];
      }
    }
  }
}
