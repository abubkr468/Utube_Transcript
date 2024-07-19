import { useEffect, useState } from "react";
import YouTube from "react-youtube";

type Caption = {
  start_time: string;
  end_time: string;
  phrases: { sentence_id: string; text: string }[];
  sequence_number: number;
};

type TranscriptData = {
  video_id: string;
  language: string;
  captions: Caption[];
};

const VideoPage = ({ videoId }: { videoId: string }) => {
  const [transcript, setTranscript] = useState<TranscriptData | null>(null);
  const [translation, setTranslation] = useState<TranscriptData | null>(null);
  const [currentCaption, setCurrentCaption] = useState<string>("");
  const [currentTranslation, setCurrentTranslation] = useState<string>("");
  const [player, setPlayer] = useState<any>(null);

  const timeStringToSeconds = (time: string): number => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  useEffect(() => {
    const fetchTranscript = async () => {
      const res = await fetch(`/api/transcripts/${videoId}`);
      const data = await res.json();
      setTranscript(data);
    };
    const fetchTranslation = async () => {
      const res = await fetch(`/api/translations/${videoId}`);
      const data = await res.json();
      setTranslation(data);
    };

    fetchTranscript();
    fetchTranslation();
  }, [videoId]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (player && player.getPlayerState() === 1) {
        // Playing
        const currentTime = player.getCurrentTime();

        const currentCaptionObj = transcript?.captions.find(
          (caption) =>
            currentTime >= timeStringToSeconds(caption.start_time) &&
            currentTime <= timeStringToSeconds(caption.end_time)
        );
        const currentTranslationObj = translation?.captions.find(
          (caption) =>
            currentTime >= timeStringToSeconds(caption.start_time) &&
            currentTime <= timeStringToSeconds(caption.end_time)
        );

        if (currentCaptionObj) {
          setCurrentCaption(
            currentCaptionObj.phrases.map((phrase) => phrase.text).join(" ")
          );
        } else {
          setCurrentCaption("");
        }
        if (currentTranslationObj) {
          setCurrentTranslation(
            currentTranslationObj.phrases.map((phrase) => phrase.text).join(" ")
          );
        } else {
          setCurrentTranslation("");
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, [player, transcript, translation]);

  const onReady = (event: any) => {
    setPlayer(event.target);
  };

  return (
    <div id="video-container">
      <YouTube videoId={videoId} onReady={onReady} />

      <div>
        <p>{currentTranslation}</p>
      </div>
    </div>
  );
};

VideoPage.getInitialProps = async ({ query }: any) => {
  return { videoId: query.videoId };
};

export default VideoPage;
