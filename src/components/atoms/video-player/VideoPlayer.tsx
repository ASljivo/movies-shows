import { FC } from "react";

interface Props {
  videoKey: string;
}

export const VideoPlayer: FC<Props> = ({ videoKey }) => {
  const url = `https://youtube.com/embed/${videoKey}?autoplay=0`;
  return (
    <iframe
      className="video"
      data-testid="iframe"
      width="100%"
      height="300px"
      title="Youtube player"
      sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
      src={url}
    ></iframe>
  );
};
