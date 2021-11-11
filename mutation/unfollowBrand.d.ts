declare namespace Mutation {
  namespace UnfollowBrand {
    interface Response {
      unfollowBrand?: boolean;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
