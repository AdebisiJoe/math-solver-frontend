import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonLoading, IonIcon } from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import Mathfield from '../components/mathlive/Mathfield';
import QuestionModal from '../components/QuestionModal';
import './Tab1.css';
import MathTextDisplay from '../components/MathTextDisplay';
import { solveQuestion, getPastQuestions } from '../services/api';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Tab1: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [solution, setSolution] = useState('');
  const [pastQuestions, setPastQuestions] = useState<{ question: string, solution: string }[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<{ question: string, solution: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSolveQuestion = async () => {
    setIsLoading(true);
    const result = await solveQuestion(question);
    setSolution(result);

    const questions = await getPastQuestions(question);
    console.log(questions);
    setPastQuestions(questions);
    setIsLoading(false);
  };

  const handleCardClick = (question: string, solution: string) => {
    setSelectedQuestion({ question, solution });
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Math Solver Solution', 14, 22);
    doc.setFontSize(14);
    doc.text(`Question: ${question}`, 14, 30);
    doc.text(`Solution:`, 14, 38);

    // Add multiline text for the solution
    const lines = doc.splitTextToSize(solution, 180);
    doc.text(lines, 14, 46);

    doc.save('math-solution.pdf');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MathSolver</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">MathSolver</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonContent className="ion-padding">
          <Mathfield value={question} onChange={setQuestion} style={{
            width: '100%',
            padding: '8px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, .3)',
            boxShadow: '0 0 8px rgba(0, 0, 0, .2)'
          }} />
          <IonButton expand="block" onClick={handleSolveQuestion}>Solve Question</IonButton>
          {solution && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p>Solution: <MathTextDisplay content={solution} /></p>
                <IonButton onClick={generatePDF} fill="outline" color="primary">
                  <IonIcon slot="start" icon={downloadOutline} />
                  Download as PDF
                </IonButton>
              </div>
            </div>
          )}
          {pastQuestions && <h2>Past similar Questions solved for other users</h2>}
          {pastQuestions && pastQuestions.map((q, index) => (
            <IonCard key={index} button onClick={() => handleCardClick(q.question, q.solution)}>
              <IonCardHeader><MathTextDisplay content={q.question} isInline={true} /></IonCardHeader>
            </IonCard>
          ))}

          {selectedQuestion && (
            <QuestionModal
              isOpen={!!selectedQuestion}
              onClose={handleCloseModal}
              question={selectedQuestion.question}
              solution={selectedQuestion.solution}
            />
          )}
          
          <IonLoading
            isOpen={isLoading}
            message={'Solving your question...'}
            spinner="crescent"
          />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
