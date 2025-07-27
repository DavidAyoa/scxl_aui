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
} from "@/components/ui/tooltip";
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
          <strong key={index} className="scxl:font-bold scxl:text-gray-900">
            {part.slice(2, -2)}
          </strong>
        );
      }

      if (part.startsWith("~~") && part.endsWith("~~")) {
        return (
          <del key={index} className="scxl:line-through scxl:text-gray-600">
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
          <em key={index} className="scxl:italic scxl:text-gray-800">
            {part.slice(1, -1)}
          </em>
        );
      }

      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className="scxl:px-1.5 scxl:py-0.5 scxl:bg-gray-100 scxl:text-gray-800 scxl:rounded scxl:text-sm scxl:font-mono scxl:border"
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
          1: "scxl:text-3xl scxl:font-bold scxl:text-gray-900 scxl:mt-8 scxl:mb-4",
          2: "scxl:text-2xl scxl:font-bold scxl:text-gray-900 scxl:mt-6 scxl:mb-3",
          3: "scxl:text-xl scxl:font-semibold scxl:text-gray-900 scxl:mt-5 scxl:mb-3",
          4: "scxl:text-lg scxl:font-semibold scxl:text-gray-800 scxl:mt-4 scxl:mb-2",
          5: "scxl:text-base scxl:font-semibold scxl:text-gray-800 scxl:mt-3 scxl:mb-2",
          6: "scxl:text-sm scxl:font-semibold scxl:text-gray-700 scxl:mt-2 scxl:mb-2",
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
          <div key={paragraphIndex} className="scxl:my-6 scxl:relative">
            {language && (
              <div className="scxl:text-xs scxl:text-gray-500 scxl:mb-1 scxl:font-mono">{language}</div>
            )}
            <pre className="scxl:p-4 scxl:bg-gray-50 scxl:rounded-lg scxl:overflow-x-auto scxl:border">
              <code className="scxl:text-sm scxl:font-mono scxl:text-gray-800">
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
          <ol key={paragraphIndex} className="scxl:my-6 scxl:ml-6 scxl:list-decimal scxl:space-y-2">
            {items.map((item, i) => (
              <li key={i} className="scxl:text-gray-700 scxl:leading-relaxed scxl:pl-2">
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
          <ul key={paragraphIndex} className="scxl:my-6 scxl:ml-6 scxl:list-disc scxl:space-y-2">
            {items.map((item, i) => (
              <li key={i} className="scxl:text-gray-700 scxl:leading-relaxed scxl:pl-2">
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
            className="scxl:my-6 scxl:pl-4 scxl:border-l-4 scxl:border-indigo-200 scxl:bg-indigo-50 scxl:py-3 scxl:pr-4 scxl:rounded-r"
          >
            <p className="scxl:text-gray-700 scxl:italic scxl:leading-relaxed">
              {renderTextWithFormatting(quoteContent)}
            </p>
          </blockquote>
        );
      }

      // Regular paragraphs
      return (
        <div
          key={paragraphIndex}
          className="scxl:my-2 scxl:text-gray-700 scxl:leading-relaxed"
        >
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              <span className="scxl:block">{renderTextWithFormatting(line)}</span>
            </React.Fragment>
          ))}
        </div>
      );
    });
  }, [renderTextWithFormatting]);

  if (!rawContent || !cleanContent(rawContent)) {
    return (
      <div className={`scxl:flex scxl:items-center scxl:space-x-2 scxl:text-gray-500 ${className}`}>
        <div className="scxl:flex scxl:space-x-1">
          <div className="scxl:w-2 scxl:h-2 scxl:rounded-full scxl:bg-gray-400 scxl:animate-bounce" />
          <div className="scxl:w-2 scxl:h-2 scxl:rounded-full scxl:bg-gray-400 scxl:animate-bounce scxl:delay-200" />
          <div className="scxl:w-2 scxl:h-2 scxl:rounded-full scxl:bg-gray-400 scxl:animate-bounce scxl:delay-400" />
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <motion.div
        className={`scxl:prose scxl:prose-lg scxl:max-w-none ${className}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="scxl:space-y-1">
          {renderFormattedContent(displayedText)}
        </div>
        
        <AnimatePresence>
          {isTypewriterComplete && (
            <motion.div
              className="scxl:flex scxl:items-center scxl:justify-between"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <div className="scxl:flex scxl:items-center scxl:gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={handleLike}
                      type="button" 
                      className="scxl:flex scxl:items-center scxl:cursor-pointer scxl:justify-center scxl:p-1.5 scxl:rounded-full scxl:transition-colors scxl:duration-200"
                    >
                      {likeState === 'liked' ? (
                        <Check className="scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" />
                      ) : (
                        <ThumbsUp className="scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" />
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
                      className="scxl:flex scxl:items-center scxl:cursor-pointer scxl:justify-center scxl:p-1.5 scxl:rounded-full scxl:transition-colors scxl:duration-200"
                    >
                      {likeState === 'disliked' ? (
                        <Check className="scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" />
                      ) : (
                        <ThumbsDown className="scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" />
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
                      className="scxl:flex scxl:items-center scxl:cursor-pointer scxl:justify-center scxl:p-1.5 scxl:rounded-full scxl:transition-colors scxl:duration-200"
                    >
                      {copyState === 'copied' ? (
                        <Check className="scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" />
                      ) : (
                        <Copy className="scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copyState === 'copied' ? 'Copied' : 'Copy'}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              <div className="scxl:flex scxl:items-center scxl:gap-2 scxl:text-xs scxl:text-gray-400">
                {/* <span className="scxl:text-purple-600">{responseTime}</span> */}
                <p className="scxl:text-gray-700 scxl:cursor-pointer hover:scxl:opacity-80 scxl:transition-all scxl:duration-200 scxl:ease-in-out">
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