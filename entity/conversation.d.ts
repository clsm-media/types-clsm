declare namespace Entity {
  type IConversationStatus = 'UPCOMING' | 'LIVE' | 'COMPLETED';

  type IConversationEventsTab = 'UPCOMING' | 'SAVED' | 'HISTORY';

  type IConversationFeedTab = 'LIVE_UPCOMING' | 'COMPLETED';

  type IReactionType = 'WOW' | 'HAPPY' | 'SAD' | 'LOVE' | 'FIRE';

  type IConversationJoin = 'TRY_JOINING_LATER' | 'NOT_AVAILABLE_TO_JOIN';

  interface IConversation {
    id: string;
    name: string;
    description: string;
    date: Date;
    promotionDate?: Date;
    coverImageURL?: string;
    status: IConversationStatus;
    topics: ITopic[];
    topic?: ITopic;
    TopicId?: string;
    interests: IInterest[];
    hosts: IUser[];
    fansAmount: number;
    sponsors: IBrand[];
    associates: IBrand[];
    producers: IUser[];
    isScheduled: boolean;
    shareURL: string;
    playbackFileURL?: string;
    streamURL?: string;
    playbackFileDurationInSeconds?: number;
    startTime?: Date;
    endTime?: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    __typename: string;
  }
}