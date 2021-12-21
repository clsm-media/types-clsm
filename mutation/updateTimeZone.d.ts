declare namespace Mutation {
  namespace UpdateTimeZone {
    interface Response {
      updateTimeZone?: Entity.ITimeZone;
    }

    interface Variables {
      input: {
        id: string;
        time: string;
        zone: string;
      };
    }
  }
}
