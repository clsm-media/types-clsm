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
    | 'USER_RAISED_HAND'
    | 'USER_CHANGE_STATUS';

  type ConversationUserStatusType =
    'JOINED'
    | 'LEFT'
    | 'LISTENER_TO_UPCOMING'
    | 'UPCOMING_TO_LISTENER'
    | 'LISTENER_TO_SPEAKER'
    | 'SPEAKER_TO_LISTENER'
    | 'UPCOMING_TO_SPEAKER';

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