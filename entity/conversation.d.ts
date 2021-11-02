declare namespace Entity {
  type IConversationStatus = 'UPCOMING' | 'LIVE' | 'COMPLETED';

  type IConversationEventsTab = 'UPCOMING' | 'SAVED' | 'HISTORY';

  type IConversationFeedTab = 'LIVE_UPCOMING' | 'COMPLETED';

  interface IConversation {
    id: string;
    name: string;
    description: string;
    date: Date;
    promotionDate?: Date;
    coverImageURL?: string;
    status: IConversationStatus;
    topics: ITopic[];
    interests: IInterest[];
    hosts: IUser[];
    fansAmount: number;
    isScheduled: boolean;
    shareURL: string;
    playbackFileURL?: string;
    streamURL?: string;
    playbackFileDurationInSeconds?: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
  }
}