/* eslint-disable @typescript-eslint/no-unused-vars */
// components/MarkdownRenderer.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // GitHub-style markdown
import rehypeHighlight from "rehype-highlight"; // Syntax highlighting
import "highlight.js/styles/github.css"; // style for code blocks

type Props = {
  content: string;
};

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <div className="prose max-w-none dark:prose-invert">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ node, children, ...props }) => {
            const text = String(children);
            const id = text
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");
            return (
              <h1 id={id} className="scroll-mt-28" {...props}>
                {children}
              </h1>
            );
          },
          h2: ({ node, children, ...props }) => {
            const text = String(children);
            const id = text
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");
            return (
              <h2 id={id} className="scroll-mt-28" {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ node, children, ...props }) => {
            const text = String(children);
            const id = text
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");
            return (
              <h3 id={id} className="scroll-mt-28" {...props}>
                {children}
              </h3>
            );
          },
          h4: ({ node, children, ...props }) => {
            const text = String(children);
            const id = text
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");
            return (
              <h4 id={id} className="scroll-mt-28" {...props}>
                {children}
              </h4>
            );
          },
          h5: ({ node, children, ...props }) => {
            const text = String(children);
            const id = text
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");
            return (
              <h5 id={id} className="scroll-mt-28" {...props}>
                {children}
              </h5>
            );
          },
          h6: ({ node, children, ...props }) => {
            const text = String(children);
            const id = text
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-");
            return (
              <h6 id={id} className="scroll-mt-28" {...props}>
                {children}
              </h6>
            );
          },
        }}
      />
    </div>
  );
};

export default MarkdownRenderer;
