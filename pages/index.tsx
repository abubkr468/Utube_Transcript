import React from "react";
import { useRouter } from "next/router";
import VideoPlayer from "@/components/VideoPlayer";

const Home: React.FC = () => {
  const router = useRouter();
  const { videoId } = router.query;

  if (!videoId || typeof videoId !== "string") {
    return <div>Loading...</div>;
  }

  return <VideoPlayer videoId={videoId} />;
};

export default Home;
