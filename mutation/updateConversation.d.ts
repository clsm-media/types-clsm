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
        timeZone: Entity.ITimeZone;
        promotionDate?: Date;
        promotionTimeZone?: Entity.ITimeZone;
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
