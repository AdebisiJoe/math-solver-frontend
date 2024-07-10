import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Mathfield from '../components/mathlive/Mathfield';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [question, setQuestion] = useState('');

  const solveQuestion = () => {
    console.log('Solving question:', question);
    // Here you can call your backend API to solve the question
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
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
          <IonButton expand="block" onClick={solveQuestion}>Solve Question</IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
