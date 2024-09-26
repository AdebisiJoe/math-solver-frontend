import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Mathfield from '../components/mathlive/Mathfield';
import QuestionModal from '../components/QuestionModal';
import './Tab1.css';
import MathTextDisplay from '../components/MathTextDisplay';
import MarkdownLatexRenderer from '../components/MarkdownLatexRenderer';
import { solveQuestion, getPastQuestions } from '../services/api';
import PDFGenerator from '../components/PDFGenerator';

const Tab1: React.FC = () => {
  const [question, setQuestion] = useState('(3x+6)^2');
  const [solution, setSolution] = useState('');
  const [pastQuestions, setPastQuestions] = useState<{ question: string, solution: string }[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<{ question: string, solution: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSolveQuestion = async () => {
    setIsLoading(true);
    const result = await solveQuestion(question, false);
    setSolution(result);

    const questions = await getPastQuestions(question, false);
    setPastQuestions(questions);
    setIsLoading(false);
  };

  const handleCardClick = (question: string, solution: string) => {
    setSelectedQuestion({ question, solution });
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
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
              <PDFGenerator question={question} solution={solution} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}>
                <p>Solution: <MarkdownLatexRenderer content={solution} /></p>
                
              </div>
            </div>
          )}

          {pastQuestions.length > 0 && <h2>Past similar Questions solved for other users</h2>}
          
          {pastQuestions && pastQuestions.map((q, index) => (
            <IonCard key={index} button onClick={() => handleCardClick(q.question, q.solution)}>
              <IonCardHeader><MarkdownLatexRenderer content={q.question}  /></IonCardHeader>
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
