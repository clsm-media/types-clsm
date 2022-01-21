declare namespace Mutation {
  namespace CreateBatch {
    interface Response {
      createBatch?: Entity.IAccessCodesBatchDetails;
    }

    interface Variables {
      input: {
        name: string;
        contactEmail: string;
        batchName: string;
        qtyCodes: number;
        shortDescription: string;
        qtyRedeemedAllowed: number;
      }
    }
  }
}
