import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonIcon, IonButton } from '@ionic/react';
import { clipboardOutline } from 'ionicons/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MathTextDisplay from '../components/MathTextDisplay';
import './Tab3.css';

const sampleQuestions = [
  '\\[ \\int \\frac{\\sin^{-1} x}{\\sqrt{1 - x^2}} \\, dx \\]',
  '\\[ \\int_{0}^{1} \\frac{x^2 - 2x}{(2x + 1)(2x^2 + 1)} \\, dx \\]',
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
            <div key={index} className="sample-question">
              <IonText>
                <p>
                  <MathTextDisplay content={question} />
                </p>
              </IonText>
              <CopyToClipboard text={question}>
                <IonButton fill="clear">
                  <IonIcon slot="icon-only" icon={clipboardOutline} />
                </IonButton>
              </CopyToClipboard>
            </div>
          ))}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
