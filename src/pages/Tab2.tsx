import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonIcon } from '@ionic/react';
import { schoolOutline } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Why this App?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Why this App?</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="content-wrapper">
          <IonIcon icon={schoolOutline} className="icon" />
          <IonText className="content-text">
            <h2>Welcome to MathSolver!</h2>
            <p>
              MathSolver is designed to help students solve complex math problems with ease. Our app provides step-by-step solutions to various mathematical equations, ensuring that students not only get the answers but also understand the process.
            </p>
            <p>
              Using advanced AI technology, MathSolver can handle a wide range of math problems, from basic arithmetic to advanced calculus. Whether you're preparing for exams or just need help with your homework, MathSolver is here to assist you.
            </p>
            <p>
              With MathSolver, you can:
            </p>
            <ul>
              <li>Get detailed solutions to your math problems.</li>
              <li>Understand the steps involved in solving equations.</li>
              <li>Improve your math skills and knowledge.</li>
              <li>Prepare effectively for exams and tests.</li>
            </ul>
            <p>
              Start using MathSolver today and take your math skills to the next level!
            </p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
