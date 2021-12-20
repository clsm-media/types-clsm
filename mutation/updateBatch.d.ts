declare namespace Mutation {
  namespace UpdateBatch {
    interface Response {
      updateBatch?: Entity.IAccessCodesBatchDetails;
    }

    interface Variables {
      input: {
        id: string;
        name: string;
        batchName: string;
        shortDescription: string;
        enabledToSignUp: boolean;
      }
    }
  }
}
