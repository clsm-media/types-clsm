declare namespace Mutation {
  namespace UpdateConversation {
    interface Response {
      updateConversation?: Entity.IConversation;
    }

    interface Variables {
      input: {
        id: string;
        name: string;
        description: string;
        topics: string[];
        date: Date;
        timeZoneId: string;
        promotionDate?: Date;
        promotionTimeZoneId?: string;
        coverImageFile?: File;
        hostsIds: string[];
        producersIds: string[];
        interests: string[];
        sponsorsIds: string[];
        associatedBrandIds: string[];
      }
    }
  }
}
