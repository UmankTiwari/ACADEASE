import React from 'react';
// You would need to install react-player: npm install react-player
import ReactPlayer from 'react-player/youtube';

export default function VideoPlayer({ url }) {
  if (!url) return null;

  return (
    <ReactPlayer url={url} controls width="100%" />
  );
}