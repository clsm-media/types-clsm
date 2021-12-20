declare namespace Mutation {
  namespace ExportBatch {
    interface Response {
      exportBatch?: Entity.ICSVResponse;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
