import React from 'react';
import Latex from 'react-latex-next';

interface MathTextProps {
  content: string;
  isInline?: boolean;
}

const MathTextDisplay: React.FC<MathTextProps> = ({ content, isInline = false }) => {
  const formattedContent = isInline ? `$${content}$` : `\\[${content}\\]`;

  return (
    <Latex>
      {formattedContent}
    </Latex>
  );
};

export default MathTextDisplay;
