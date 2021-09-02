declare namespace Query {
  namespace GetUserById {
    interface Response {
      user: Entity.IUser;
    }
  
    interface Variables {
      id: string;
    }
  }
}