declare namespace Mutation {
  namespace SendBatchToEmail {
    interface Response {
      sendBatchToEmail: Boolean;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
