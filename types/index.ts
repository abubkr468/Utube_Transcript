// types.ts
export interface Phrase {
    sentence_id: string;
    text: string;
  }
  
  export interface Caption {
    start_time: string;
    end_time: string;
    phrases: Phrase[];
    sequence_number: number;
  }
  
  export interface Transcript {
    video_id: string;
    language: string;
    captions: Caption[];
  }
  
  export interface Translation {
    video_id: string;
    language: string;
    captions: Caption[];
  }
  