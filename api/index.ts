// api.ts
import { Transcript, Translation } from '../types';

export const fetchTranscript = async (videoId: string): Promise<Transcript> => {
  const response = await fetch(`/api/transcripts/${videoId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch transcript');
  }
  return response.json();
};

export const fetchTranslation = async (videoId: string): Promise<Translation> => {
  const response = await fetch(`/api/translations/${videoId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch translation');
  }
  return response.json();
};
