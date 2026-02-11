import { useCallback, useEffect, useRef } from 'react';

export function useVideoAutoplay() {
  const videoRefs = useRef<Set<HTMLVideoElement>>(new Set());

  useEffect(() => {
    return () => {
      videoRefs.current.clear();
    };
  }, []);

  const registerVideo = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;

    videoRefs.current.add(video);

    // Try unmuted first (works on most desktop browsers).
    // If blocked, fall back to muted autoplay (required on iOS / strict browsers).
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        video.play().catch(() => {
          // Even muted autoplay blocked — leave paused with native controls.
        });
      });
    }
  }, []);

  return { registerVideo };
}
