import { useRef, useState } from 'react';
import './VideoBackground.css';

/**
 * VideoBackground
 * Renders either:
 *  - A YouTube embed iframe (when src contains "youtube")
 *  - A direct <video> element (for .mp4 / .webm paths)
 *  - A CSS gradient fallback when no src is provided
 *
 * The video layer always sits below a dark gradient overlay.
 */
export default function VideoBackground({
  src,
  poster,
  overlayOpacity = 0.62,
  gradientOverlay = true,
}) {
  const [iframeError, setIframeError] = useState(false);
  const videoRef = useRef(null);

  const isYouTube =
    src &&
    (src.includes('youtube.com') || src.includes('youtu.be'));

  // Build autoplay-forced YouTube URL
  const buildYouTubeUrl = (rawSrc) => {
    try {
      const url = new URL(rawSrc);
      // If it's a plain watch URL, convert to embed
      if (url.hostname.includes('youtube.com') && url.pathname === '/watch') {
        const v = url.searchParams.get('v');
        rawSrc = `https://www.youtube.com/embed/${v}`;
      }
      const embedUrl = new URL(rawSrc);
      embedUrl.searchParams.set('autoplay', '1');
      embedUrl.searchParams.set('mute', '1');
      embedUrl.searchParams.set('loop', '1');
      embedUrl.searchParams.set('controls', '0');
      embedUrl.searchParams.set('showinfo', '0');
      embedUrl.searchParams.set('rel', '0');
      embedUrl.searchParams.set('modestbranding', '1');
      embedUrl.searchParams.set('iv_load_policy', '3');
      embedUrl.searchParams.set('disablekb', '1');
      embedUrl.searchParams.set('playlist', embedUrl.pathname.split('/').pop()); // loop requires playlist
      return embedUrl.toString();
    } catch {
      return rawSrc;
    }
  };

  return (
    <div className="vb" aria-hidden="true">
      {/* ── Video / iframe layer ── */}
      {src && !iframeError ? (
        isYouTube ? (
          <iframe
            className="vb__iframe"
            src={buildYouTubeUrl(src)}
            title="Background video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            onError={() => setIframeError(true)}
            tabIndex={-1}
            aria-hidden="true"
          />
        ) : (
          <video
            ref={videoRef}
            className="vb__video"
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )
      ) : poster ? (
        <div
          className="vb__poster"
          style={{ backgroundImage: `url(${poster})` }}
        />
      ) : (
        <div className="vb__fallback" />
      )}

      {/* ── Overlay ── */}
      {gradientOverlay && (
        <div
          className="vb__overlay"
          style={{
            '--overlay-top': `rgba(0,0,0,${overlayOpacity})`,
          }}
        />
      )}
    </div>
  );
}
