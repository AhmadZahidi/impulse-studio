import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const MainPage = () => {
  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>MainPage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <h1>MainPage</h1>
        </IonContent>
      </IonPage>
    </>
  );
};

export default MainPage;
