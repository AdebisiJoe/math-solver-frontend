import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonIcon, IonButton, IonRow, IonCol } from '@ionic/react';
import { clipboardOutline } from 'ionicons/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MathTextDisplay from '../components/MathTextDisplay'; // Make sure to import your MathTextDisplay component
import MarkdownLatexRenderer from '../components/MarkdownLatexRenderer';
import './Tab3.css';

const sampleQuestions = [
  { type: "algebra", question: '\\[ x^2 - 5x + 6 = 0 \\]' },
  { type: "algebra", question: '\\[ (a + b)^2 = a^2 + 2ab + b^2 \\]' },
  { type: "calculus", question: '\\[ \\int_{0}^{1} \\frac{x^2 - 2x}{(2x + 1)(2x^2 + 1)} \\, dx \\]' },
  { type: "calculus", question: '\\[ \\frac{d}{dx} (e^x \\sin x) \\]' },
  { type: "geometry", question: '\\[ \\text{Find the area of a triangle with base } b \\text{ and height } h. \\]' },
  { type: "geometry", question: '\\[ \\text{Calculate the circumference of a circle with radius } r. \\]' },
  { type: "trigonometry", question: '\\[ \\sin^2 \\theta + \\cos^2 \\theta = 1 \\]' },
  { type: "trigonometry", question: '\\[ \\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)} \\]' },
  { type: "statistics", question: '\\[ \\text{Calculate the mean of the following data set: } 2, 4, 6, 8, 10. \\]' },
  { type: "statistics", question: '\\[ \\text{Find the variance of the data set: } 3, 7, 7, 19, 24. \\]' },
  { type: "arithmetic", question: '\\[ 15 + 27 = ? \\]' },
  { type: "arithmetic", question: '\\[ 45 \\div 5 = ? \\]' },
  { type: "number theory", question: '\\[ \\text{Find the greatest common divisor of } 48 \\text{ and } 60. \\]' },
  { type: "number theory", question: '\\[ \\text{Determine if } 29 \\text{ is a prime number.} \\]' },
  { type: "combinatorics", question: '\\[ \\text{How many ways can you arrange 5 books on a shelf?} \\]' },
  { type: "combinatorics", question: '\\[ \\text{How many subsets can be made from a set with 4 elements?} \\]' },
  { type: "probability", question: '\\[ \\text{What is the probability of rolling a 3 on a fair six-sided die?} \\]' },
  { type: "probability", question: '\\[ \\text{Find the probability of drawing an ace from a standard deck of cards.} \\]' },
  { type: "linear algebra", question: '\\[ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\ B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} \\text{, find } A + B \\]' },
  { type: "linear algebra", question: '\\[ \\text{Find the determinant of the matrix } \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} \\]' },
  { type: "differential equations", question: '\\[ \\frac{d^2 y}{dx^2} + y = 0 \\]' },
  { type: "differential equations", question: '\\[ y\' = xy \\]'
  },
];

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sample Questions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sample Questions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {sampleQuestions.map((item, index) => (
            <IonRow key={index} className="sample-question">
              <IonCol size="10">
                <IonText>
                  <p>
                    <MarkdownLatexRenderer content={item.question} />
                  </p>
                  <IonText>{item.type}</IonText>
                </IonText>
              </IonCol>
              <IonCol size="2" className="copy-button-col">
                <CopyToClipboard text={item.question}>
                  <IonButton fill="clear">
                    <IonIcon slot="icon-only" icon={clipboardOutline} />
                  </IonButton>
                </CopyToClipboard>
              </IonCol>
            </IonRow>
          ))}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
