import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css'; // Import the CSS

interface LatexRendererProps {
  latexString: string;
}

const LatexRenderer: React.FC<LatexRendererProps> = ({ latexString }) => {
  const renderLatexToHTML = (latexString: string): string => {
    return katex.renderToString(latexString, {
      throwOnError: false,
    });
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: renderLatexToHTML(latexString) }}
    />
  );
};

export default LatexRenderer;
