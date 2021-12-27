declare namespace Mutation {
  namespace ToggleRaiseHand {
    interface Response {
      toggleRaiseHand?: Boolean;
    }

    interface Variables {
      input: {
        conversationId: string;
        desiredRaisedHand?: boolean;
      };
    }
  }
}
