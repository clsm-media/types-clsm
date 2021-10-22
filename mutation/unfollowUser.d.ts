declare namespace Mutation {
  namespace UnfollowUser {
    interface Response {
      unfollowUser?: boolean;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
