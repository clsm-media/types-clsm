declare namespace Enums {
  enum EventDetailsTypesEnum {
    LISTENER_TO_SPEAKER = 'LISTENER_TO_SPEAKER',
    LISTENER_TO_UPCOMING = 'LISTENER_TO_UPCOMING',
    UPCOMING_TO_LISTENER = 'UPCOMING_TO_LISTENER',
    UPCOMING_TO_SPEAKER = 'UPCOMING_TO_SPEAKER',
    SPEAKER_TO_LISTENER = 'SPEAKER_TO_LISTENER',
    JOINED = 'JOINED',
    LEFT = 'LEFT',
  }

  interface IEventDetailsTypes {
    constants: EventDetailsTypesEnum;
  }
}