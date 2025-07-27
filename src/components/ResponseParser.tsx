"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { JSX } from "react/jsx-runtime";
import { ThumbsUp, ThumbsDown, Copy, Check } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import type { ResponseParserProps } from "../types";

const ResponseParser: React.FC<ResponseParserProps> = ({
  rawContent,
  className = "",
  typewriterEffect = true,
  timeStamp,
  typewriterSpeed = 20,
  disableTypewriter = false,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [likeState, setLikeState] = useState<'idle' | 'liked' | 'disliked'>('idle');
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);
  // const [responseTime, setResponseTime] = useState("2.3s");

  // Enhanced content cleaning for OpenAI responses
  const cleanContent = useCallback((content: string): string => {
    if (!content) return "";

    return content
      // Remove OpenAI streaming artifacts
      .replace(/^data:\s*/gm, "")
      .replace(/\[DONE\]/g, "")
      .replace(/^event:\s*\w+\s*$/gm, "")
      
      // Clean role and content wrappers
      .replace(/role=['"]assistant['"][^}]*content=['"]([^'"]*)['"]/g, "$1")
      .replace(/role='assistant'\s+content='/g, "")
      .replace(/role="assistant"\s+content="/g, "")
      .replace(/\s+tool_calls=\[\]/g, "")
      .replace(/'\s+tool_calls=\[\]$/g, "")
      .replace(/"\s+tool_calls=\[\]$/g, "")
      
      // Clean content field extractions
      .replace(/content=['"]([^'"]*)['"][^}]*/g, "$1")
      .replace(/content='([^']*)'/g, "$1")
      .replace(/content="([^"]*)"/g, "$1")
      
      // Clean JSON artifacts
      .replace(/\{"content":\s*"([^"]*)"[^}]*\}/g, "$1")
      .replace(/\{"delta":\s*\{"content":\s*"([^"]*)"[^}]*\}[^}]*\}/g, "$1")
      
      // Clean streaming deltas
      .replace(/delta:\s*\{[^}]*content[^}]*:\s*['"]([^'"]*)['"]/g, "$1")
      
      // Clean misc artifacts
      .replace(/None$/gm, "")
      .replace(/null$/gm, "")
      .replace(/undefined$/gm, "")
      
      // Normalize whitespace and newlines
      .replace(/\\n/g, "\n")
      .replace(/\\r/g, "\r")
      .replace(/\\t/g, "\t")
      .replace(/\\\\/g, "\\")
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      
      // Remove extra whitespace
      .replace(/^\s+/gm, "")
      .replace(/\s+$/gm, "")
      .trim();
  }, []);

  const formatContent = useCallback((content: string): string => {
    const cleaned = cleanContent(content);
    return cleaned
      .replace(/[ \t]+/g, " ")
      .replace(/\n\s+/g, "\n")
      .replace(/\s+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }, [cleanContent]);

  const handleLike = useCallback(() => {
    setLikeState('liked');
    setTimeout(() => setLikeState('idle'), 2000);
  }, []);

  const handleDislike = useCallback(() => {
    setLikeState('disliked');
    setTimeout(() => setLikeState('idle'), 2000);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      const textToCopy = formatContent(rawContent);
      await navigator.clipboard.writeText(textToCopy);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = formatContent(rawContent);
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopyState('copied');
        setTimeout(() => setCopyState('idle'), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  }, [rawContent, formatContent]);

  // Enhanced typewriter effect with completion detection
  useEffect(() => {
    if (!typewriterEffect || disableTypewriter) {
      const formatted = formatContent(rawContent);
      setDisplayedText(formatted);
      setIsTypewriterComplete(true);
      return;
    }

    const cleaned = formatContent(rawContent);
    if (index < cleaned.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + cleaned.charAt(index));
        setIndex((prev) => prev + 1);
      }, typewriterSpeed);

      return () => clearTimeout(timeout);
    } else if (cleaned.length > 0 && index >= cleaned.length) {
      // Typewriter is complete
      setTimeout(() => setIsTypewriterComplete(true), 200);
    }
  }, [rawContent, index, typewriterEffect, typewriterSpeed, formatContent, disableTypewriter]);

  // Reset states when content changes, but be smart about streaming
  useEffect(() => {
    const cleaned = formatContent(rawContent);
    
    // If typewriter is disabled, always show full content immediately
    if (disableTypewriter) {
      setDisplayedText(cleaned);
      setIsTypewriterComplete(true);
      return;
    }
    
    // If this is a fresh message (no previous content), reset everything
    if (displayedText === "" || !cleaned.startsWith(displayedText)) {
      setIndex(0);
      setDisplayedText("");
      setIsTypewriterComplete(false);
      setLikeState('idle');
      setCopyState('idle');
    }
    // If content is just being appended (streaming), don't reset
    // The typewriter will continue from where it left off
  }, [rawContent, disableTypewriter, formatContent]);

  const renderTextWithFormatting = useCallback((text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|_.*?_|`.*?`|~~.*?~~)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-gray-900">
            {part.slice(2, -2)}
          </strong>
        );
      }

      if (part.startsWith("~~") && part.endsWith("~~")) {
        return (
          <del key={index} className="line-through text-gray-600">
            {part.slice(2, -2)}
          </del>
        );
      }

      if (
        (part.startsWith("*") &&
          part.endsWith("*") &&
          !part.startsWith("**")) ||
        (part.startsWith("_") && part.endsWith("_"))
      ) {
        return (
          <em key={index} className="italic text-gray-800">
            {part.slice(1, -1)}
          </em>
        );
      }

      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-sm font-mono border"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      return <span key={index}>{part}</span>;
    });
  }, []);

  const renderFormattedContent = useCallback((content: string) => {
    const paragraphs = content.split(/\n\n+/).filter((p) => p.trim());

    return paragraphs.map((paragraph, paragraphIndex) => {
      const lines = paragraph.trim().split("\n");

      // Headers
      if (lines.length === 1 && lines[0].startsWith("#")) {
        const headerText = lines[0].replace(/^#+\s*/, "");
        const headerLevel = Math.min((lines[0].match(/^#+/) || [""])[0].length, 6);

        const HeaderTag = `h${headerLevel}` as keyof JSX.IntrinsicElements;
        const headerClasses = {
          1: "text-3xl font-bold text-gray-900 mt-8 mb-4",
          2: "text-2xl font-bold text-gray-900 mt-6 mb-3",
          3: "text-xl font-semibold text-gray-900 mt-5 mb-3",
          4: "text-lg font-semibold text-gray-800 mt-4 mb-2",
          5: "text-base font-semibold text-gray-800 mt-3 mb-2",
          6: "text-sm font-semibold text-gray-700 mt-2 mb-2",
        };

        return (
          <HeaderTag
            key={paragraphIndex}
            className={headerClasses[headerLevel as keyof typeof headerClasses]}
          >
            {renderTextWithFormatting(headerText)}
          </HeaderTag>
        );
      }

      // Code blocks
      if (lines[0].startsWith("```") && lines[lines.length - 1] === "```") {
        const language = lines[0].replace("```", "").trim();
        const codeContent = lines.slice(1, -1).join("\n");
        return (
          <div key={paragraphIndex} className="my-6 relative">
            {language && (
              <div className="text-xs text-gray-500 mb-1 font-mono">{language}</div>
            )}
            <pre className="p-4 bg-gray-50 rounded-lg overflow-x-auto border">
              <code className="text-sm font-mono text-gray-800">
                {codeContent}
              </code>
            </pre>
          </div>
        );
      }

      // Numbered lists
      const isNumberedList = lines.every(
        (line) => line.trim() === "" || /^\d+\./.test(line.trim())
      );

      if (isNumberedList && lines.some((line) => /^\d+\./.test(line.trim()))) {
        const items = lines
          .filter((line) => /^\d+\./.test(line.trim()))
          .map((line) => line.replace(/^\d+\.\s*/, "").trim());
        return (
          <ol key={paragraphIndex} className="my-6 ml-6 list-decimal space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700 leading-relaxed pl-2">
                {renderTextWithFormatting(item)}
              </li>
            ))}
          </ol>
        );
      }

      // Bullet lists
      const isBulletList = lines.every(
        (line) => line.trim() === "" || /^[-•*+]/.test(line.trim())
      );

      if (isBulletList && lines.some((line) => /^[-•*+]/.test(line.trim()))) {
        const items = lines
          .filter((line) => /^[-•*+]/.test(line.trim()))
          .map((line) => line.replace(/^[-•*+]\s*/, "").trim());
        return (
          <ul key={paragraphIndex} className="my-6 ml-6 list-disc space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700 leading-relaxed pl-2">
                {renderTextWithFormatting(item)}
              </li>
            ))}
          </ul>
        );
      }

      // Blockquotes
      if (lines.every((line) => line.trim() === "" || line.startsWith(">"))) {
        const quoteContent = lines
          .filter((line) => line.startsWith(">"))
          .map((line) => line.replace(/^>\s*/, ""))
          .join(" ");
        return (
          <blockquote
            key={paragraphIndex}
            className="my-6 pl-4 border-l-4 border-indigo-200 bg-indigo-50 py-3 pr-4 rounded-r"
          >
            <p className="text-gray-700 italic leading-relaxed">
              {renderTextWithFormatting(quoteContent)}
            </p>
          </blockquote>
        );
      }

      // Regular paragraphs
      return (
        <div
          key={paragraphIndex}
          className="my-2 text-gray-700 leading-relaxed"
        >
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              <span className="block">{renderTextWithFormatting(line)}</span>
            </React.Fragment>
          ))}
        </div>
      );
    });
  }, [renderTextWithFormatting]);

  if (!rawContent || !cleanContent(rawContent)) {
    return (
      <div className={`flex items-center space-x-2 text-gray-500 ${className}`}>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200" />
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-400" />
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <motion.div
        className={`prose prose-lg max-w-none ${className}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-1">
          {renderFormattedContent(displayedText)}
        </div>
        
        <AnimatePresence>
          {isTypewriterComplete && (
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={handleLike}
                      type="button" 
                      className="flex items-center cursor-pointer justify-center p-1.5 rounded-full transition-colors duration-200"
                    >
                      {likeState === 'liked' ? (
                        <Check className="w-3.5 h-3.5 text-indigo-500" />
                      ) : (
                        <ThumbsUp className="w-3.5 h-3.5 text-indigo-500" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{likeState === 'liked' ? 'Liked' : 'Like'}</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={handleDislike}
                      type="button" 
                      className="flex items-center cursor-pointer justify-center p-1.5 rounded-full transition-colors duration-200"
                    >
                      {likeState === 'disliked' ? (
                        <Check className="w-3.5 h-3.5 text-indigo-500" />
                      ) : (
                        <ThumbsDown className="w-3.5 h-3.5 text-indigo-500" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{likeState === 'disliked' ? 'Disliked' : 'Dislike'}</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={handleCopy}
                      type="button" 
                      className="flex items-center cursor-pointer justify-center p-1.5 rounded-full transition-colors duration-200"
                    >
                      {copyState === 'copied' ? (
                        <Check className="w-3.5 h-3.5 text-indigo-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-indigo-500" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copyState === 'copied' ? 'Copied' : 'Copy'}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-400">
                {/* <span className="text-purple-600">{responseTime}</span> */}
                <p className="text-gray-700 cursor-pointer hover:opacity-80 transition-all duration-200 ease-in-out">
                  {new Date(timeStamp || Date.now()).toLocaleTimeString()}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </TooltipProvider>
  );
};

export default ResponseParser;