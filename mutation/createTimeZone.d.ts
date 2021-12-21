declare namespace Mutation {
  namespace CreateTimeZone {
    interface Response {
      createTimeZone?: Entity.ITimeZone;
    }

    interface Variables {
      input: {
        time: string;
        zone: string;
      };
    }
  }
}
