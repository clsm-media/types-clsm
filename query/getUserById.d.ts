declare namespace Query {
  namespace GetUserById {
    interface Response {
      getUserById?: Entity.IUser;
    }
  
    interface Variables {
      id: string;
    }
  }
}