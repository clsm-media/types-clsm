declare namespace Query {
  namespace GetConferenceToken {
    interface Response {
      getConferenceToken?: string;
    }
  
    interface Variables {
      input: {
        conversationId: string;
      }
    }
  }
}