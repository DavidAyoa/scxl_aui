import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // milliseconds per character
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 20, // default speed: 20ms per character (configurable via ChatUI props)
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buffer, setBuffer] = useState('');

  useEffect(() => {
    // Reset state when new text comes in
    setBuffer(text);
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex >= buffer.length) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + buffer[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, buffer, speed, onComplete]);

  return <span>{displayedText}</span>;
};

export default Typewriter; 