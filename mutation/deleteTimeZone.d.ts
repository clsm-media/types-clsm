declare namespace Mutation {
  namespace DeleteTimeZone {
    interface Response {
      deleteTimeZone?: Entity.ITimeZone;
    }

    interface Variables {
      input: {
        id: string;
      };
    }
  }
}
