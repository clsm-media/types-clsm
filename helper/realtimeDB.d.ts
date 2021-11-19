declare namespace Helper {  
  namespace RealtimeDB {
    interface ISnapshot {
      t?: string; // t: current topic (if any)
      h?: {
        i: string; // "i": user id
        s?: number; // "s": if the user is speaking
        p?: string; // "p": user profile picture (URL)
        fn?: string; // "fn": user full name
      }[]; // "h": hosts/guest participating in the conference (if any)
      cc?: string; // "cc": closed captions
      l?: number; // "l": amount of listeners (if any)
    }
  }
}