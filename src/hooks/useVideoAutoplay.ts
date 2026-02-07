import { useEffect, useRef } from 'react';

export function useVideoAutoplay() {
  const videoRefs = useRef<Set<HTMLVideoElement>>(new Set());
  const hasInteracted = useRef(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (hasInteracted.current) return;
      
      hasInteracted.current = true;
      
      videoRefs.current.forEach(video => {
        video.muted = false;
      });
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const registerVideo = (video: HTMLVideoElement | null) => {
    if (!video) return;
    
    videoRefs.current.add(video);
    
    if (hasInteracted.current) {
      video.muted = false;
    }
  };

  return { registerVideo };
}
