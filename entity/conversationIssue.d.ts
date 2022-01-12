declare namespace Entity {
  type IConversationIssueType =
    'CHANGE_ISSUE_STATUS'
    | 'SENT_EMAIL'
    | 'ADMIN_NOTE';

  type IConversationIssueStatusType =
    'PENDING'
    | 'SOLVED'
    | 'UNSOLVED';

  interface IConversationIssue {
    id: string;
    eventDetails?: string;
    eventType: IConversationIssueType;
    notes?: string;
    ConversationId: string;
    conversation: Entity.IConversation;
    IssueId: string;
    issue: Entity.IIssue;
    UserId?: string;
    user?: Entity.IUser;
    AdminId?: string;
    admin?: IAdmin;
    createdAt: Date;
    updatedAt: Date;
    __typename: string;
  }
}