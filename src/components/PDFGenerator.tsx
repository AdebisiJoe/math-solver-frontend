import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import katex from 'katex';
import 'katex/dist/katex.min.css'; // Import the CSS

interface PDFGeneratorProps {
  question: string;
  solution: string;
}

const renderLatexToHTML = (latexString: string): string => {
  return katex.renderToString(latexString, {
    throwOnError: false,
  });
};

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ question, solution }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Math Solver Solution', 14, 22);
    doc.setFontSize(14);
    doc.text(`Question: ${question}`, 14, 30);
    doc.text('Solution:', 14, 38);

    // Render the solution using katex
    const renderedSolution = renderLatexToHTML(solution);

    // Split the rendered HTML into lines
    const lines = doc.splitTextToSize(renderedSolution, 180);
    doc.text(lines, 14, 46);

    doc.save('math-solution.pdf');
  };

  return (
    <IonButton onClick={generatePDF} fill="outline" color="primary">
      <IonIcon slot="start" icon={downloadOutline} />
      Download as PDF
    </IonButton>
  );
};

export default PDFGenerator;
