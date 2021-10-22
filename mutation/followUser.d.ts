declare namespace Mutation {
  namespace FollowUser {
    interface Response {
      followUser?: boolean;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
