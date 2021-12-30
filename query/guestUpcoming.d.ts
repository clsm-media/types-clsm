declare namespace Query {
  namespace GuestUpcoming {
    import IUser = Entity.IUser;

    interface Response {
      guestUpcoming: IUser[];
    }
  
    interface Variables {
      input: {
        conversationId: string;
      }
    }
  }
}