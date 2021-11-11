declare namespace Mutation {
  namespace FollowBrand {
    interface Response {
      followBrand?: boolean;
    }

    interface Variables {
      input: {
        id: string;
      }
    }
  }
}
