import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonIcon, IonButton, IonRow, IonCol } from '@ionic/react';
import { clipboardOutline } from 'ionicons/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MathTextDisplay from '../components/MathTextDisplay'; // Make sure to import your MathTextDisplay component
import './Tab3.css';

const sampleQuestions = [
  '\\[ \\int \\frac{\\sin^{-1} x}{\\sqrt{1 - x^2}} \\, dx \\]',
  '\\[ \\int_{0}^{1} \\frac{x^2 - 2x}{(2x + 1)(2x^2 + 1)} \\, dx \\]',
  '\\[ x^2 - 5x + 6 = 0 \\]',
  '\\[ (a + b)^2 = a^2 + 2ab + b^2 \\]',
  '\\[ \\frac{d}{dx} (e^x \\sin x) \\]',
  '\\[ \\sum_{n=1}^{\\infty} \\frac{1}{n^2} \\]',
  '\\[ \\int e^x \\cos x \\, dx \\]',
  '\\[ \\lim_{{x \\to 0}} \\frac{\\sin x}{x} \\]',
  '\\[ \\int \\frac{1}{x \\ln x} \\, dx \\]',
  '\\[ \\frac{d}{dx} (\\ln x) = \\frac{1}{x} \\]',
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
          {sampleQuestions.map((question, index) => (
            <IonRow key={index} className="sample-question">
              <IonCol size="10">
                <IonText>
                  <p>
                    <MathTextDisplay content={question} />
                  </p>
                </IonText>
              </IonCol>
              <IonCol size="2" className="copy-button-col">
                <CopyToClipboard text={question}>
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
