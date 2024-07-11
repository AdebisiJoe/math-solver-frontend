import React, { useRef } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import LatexRenderer from './LatexRenderer';

interface PDFGeneratorProps {
  question: string;
  solution: string;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ question, solution }) => {
  const latexContainerRef = useRef<HTMLDivElement>(null);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Math Solver Solution', 14, 22);
    doc.setFontSize(14);
    doc.text(`Question: ${question}`, 14, 30);
    doc.text('Solution:', 14, 38);

    if (latexContainerRef.current) {
      const renderedSolution = latexContainerRef.current.innerText;
      const lines = doc.splitTextToSize(renderedSolution, 180);
      doc.text(lines, 14, 46);
    }

    doc.save('math-solution.pdf');
  };

  return (
    <>
      <div ref={latexContainerRef} style={{ display: 'none' }}>
        <LatexRenderer latexString={solution} />
      </div>
      <IonButton onClick={generatePDF} fill="outline" color="primary">
        <IonIcon slot="start" icon={downloadOutline} />
        Download as PDF
      </IonButton>
    </>
  );
};

export default PDFGenerator;
