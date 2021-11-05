declare namespace Mutation {
  namespace DeleteBrand {
    interface Response {
      deleteBrand?: boolean;
    }

    interface Variables {
      input: {
        id: string;
      };
    }
  }
}
