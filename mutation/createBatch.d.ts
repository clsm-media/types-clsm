declare namespace Mutation {
  namespace CreateBatch {
    interface Response {
      createBatch?: Entity.IAccessCodesBatchDetails;
    }

    interface Variables {
      input: {
        name: string;
        batchName: string;
        qtyCodes: number;
        shortDescription: string;
      }
    }
  }
}
