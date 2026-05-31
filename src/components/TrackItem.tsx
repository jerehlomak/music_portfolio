import React from "react";

interface TrackItemProps {
  number: string;
  title: string;
  youtubeLink?: string;
  spotifyLink?: string;
  appleMusicLink?: string;
}

export default function TrackItem({ number, title, youtubeLink, spotifyLink, appleMusicLink }: TrackItemProps) {
  return (
    <div role="listitem" className="tracklist-track-row w-dyn-item">
      <div className="track-meta-wrapper">
        <h6 className="track-number">{number}</h6>
        <h6 className="track-title">{title}</h6>
      </div>
      <div className="track-links-wrapper">
        <a href={youtubeLink || "#"} className="w-inline-block">
          <img
            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0e70294800aa426f7e_YT Icon.svg"
            loading="lazy"
            alt="youtube logo"
          />
        </a>
        <a
          href={spotifyLink || "#"}
          target="_blank"
          className="w-inline-block"
        >
          <img
            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0d6752a808cbf4ee7f_Spotify Icon.svg"
            loading="lazy"
            alt="spotify logo"
          />
        </a>
        <a href={appleMusicLink || "#"} className="w-inline-block">
          <img
            src="https://cdn.prod.website-files.com/6409e623c0941a921d535617/64246e0dc8e23d0e76255cec_Apple Music Icon.svg"
            loading="lazy"
            alt="apple music logo"
          />
        </a>
      </div>
    </div>
  );
}
