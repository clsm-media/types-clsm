declare namespace Mutation {
  namespace CreateConversation {
    interface Response {
      createConversation?: Entity.IConversation;
    }

    interface Variables {
      input: {
        name: string;
        description: string;
        date: Date;
        timeZone: Entity.ITimeZone;
        promotionDate?: Date;
        promotionTimeZone?: Entity.ITimeZone;
        coverImageFile?: File;
        hostsIds: string[];
        producersIds: string[];
        topics: string[];
        interests: string[];
        sponsorsIds: string[];
        associatedBrandIds: string[];
      }
    }
  }
}
