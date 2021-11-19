declare namespace Entity {
  type IConversationEventType =
    'HOST_START_TALKING'
    | 'HOST_STOP_TALKING'
    | 'CURRENT_TOPIC_UPDATE'
    | 'USER_JOINS'
    | 'USER_LEAVES'
    | 'HOST_JOINS'
    | 'HOST_LEAVES'
    | 'USER_REACTS'
    | 'USER_ISSUE'
    | 'USER_RAISED_HAND';

  interface IConversationEvent {
    id: string;
    eventDetails?: string;
    eventType: IConversationEventType;
    ConversationId: string;
    conversation: Entity.IConversation;
    TopicId?: string;
    topic?: Entity.ITopic;
    UserId: string;
    user: Entity.IUser;   
    createdAt: Date;
    updatedAt: Date;
    __typename: string;
  }
}