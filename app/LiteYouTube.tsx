/* eslint-disable @next/next/no-img-element -- The YouTube preview is a lightweight, lazy remote poster that avoids loading the full player until intent. */

const videoTitle =
  "Jeroen Sakkers interviews the Prime Minister of the Netherlands";

export default function LiteYouTube() {
  return (
    <a
      className="lite-youtube"
      href="https://www.youtube.com/watch?v=mynvKKeugcs&amp;t=49s"
      aria-label={`Watch ${videoTitle} on YouTube`}
    >
      <img
        src="https://i.ytimg.com/vi/mynvKKeugcs/maxresdefault.jpg"
        alt=""
        width="1280"
        height="720"
        loading="lazy"
        decoding="async"
      />
      <span className="lite-youtube-action" aria-hidden="true">
        <span className="lite-youtube-play">▶</span>
        Watch the interview
      </span>
    </a>
  );
}
