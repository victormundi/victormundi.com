/* eslint-disable @next/next/no-img-element -- The YouTube preview is a lightweight, lazy remote thumbnail that avoids loading the full player until intent. */

const videoTitle =
  "Jeroen Sakkers interviews then–Prime Minister Mark Rutte at Dag van de ZZP'er";

export default function LiteYouTube() {
  return (
    <a
      className="lite-youtube"
      href="https://www.youtube.com/watch?v=mynvKKeugcs&amp;t=49s"
      aria-label={`Watch ${videoTitle} on YouTube`}
    >
      <img
        src="https://i.ytimg.com/vi/mynvKKeugcs/hqdefault.jpg"
        alt=""
        width="480"
        height="360"
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
