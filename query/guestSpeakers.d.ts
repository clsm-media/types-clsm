declare namespace Query {
  namespace GuestSpeakers {
    import IUser = Entity.IUser;

    interface Response {
      guestSpeakers: IUser[];
    }
  
    interface Variables {
      input: {
        conversationId: string;
      }
    }
  }
}