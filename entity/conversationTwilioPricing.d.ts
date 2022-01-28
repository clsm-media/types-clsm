declare namespace Entity {
  interface IConversationTwilioPricingParticipantsField {
    id: string;
    connections: number;
    estimatedPrice: number;
    totalDurationInMinutes: number;
    totalDurationInSeconds: number;
    userFullName: string;
    UserId: string;
  }

  interface IConversationTwilioPricingPricingField {
    id: string;
    akamaiStreamPerMinutePrice: number;
    recordingPerMinutePrice: number;
    streamPerMinutePrice: number;
    voipIngoingPerMinutePrice: number;
    voipOutgoingPerMinutePrice: number;
  }

  interface IConversationTwilioPricingTotalsField {
    id: string;
    estimatedAkamaiTotal: number;
    estimatedCallTotal: number;
    estimatedRecordingTotal: number;
    estimatedStreamTotal: number;
    estimatedTotal: number;
    totalDurationInMinutes: number;
    totalDurationInSeconds: number;
  }

  interface IConversationTwilioPricing {
    id: string;
    totalDuration: number;
    participants: IConversationTwilioPricingParticipantsField[];
    pricing: IConversationTwilioPricingPricingField;
    totals: IConversationTwilioPricingTotalsField;
    createdAt: Date;
    updatedAt: Date;
  }
}