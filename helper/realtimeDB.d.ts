declare namespace Helper {  
  namespace RealtimeDB {
    // t: current topic (if any)
    interface ISnapshot {
      t?: {
        i: string; // "i": topic id
        n?: string; // "n": topic name
        v?: string; // "v": topic voted times
      }; 
      // "h": hosts participating in the conference (if any)
      h?: {
        i: string; // "i": user id
        s?: number; // "s": if the user is speaking
        p?: string; // "p": user profile picture (URL)
        fn?: string; // "fn": user full name
        m?: number; // "m": if the user is muted
      }[];
      // "g": guests participating in the conference (if any)
      g?: {
        i: string; // "i": user id
        s?: number; // "s": if the user is speaking
        p?: string; // "p": user profile picture (URL)
        fn?: string; // "fn": user full name
        m?: number; // "m": if the user is muted
      }[]; // "h": hosts/guest participating in the conference (if any)
      cc?: string; // "cc": closed captions
      l?: number; // "l": amount of listeners (if any)
    }
  }
}