import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import React, { useState } from "react";

const MainPage: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [state, setState] = useState({
    step: 1,
    number: 1,
    text: "hello",
    name: "hello",
  });

  const [step, setStep] = useState(0);

  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
          <br />
          <br />
          Name: {state.name}
          <br />
          <br />
          Step: {state.step}
          <IonButton
            onClick={() =>
              presentAlert({
                header: "Alert",
                subHeader: "Important message",
                message: "This is an alert!",
                buttons: ["OK"],
              })
            }
          >
            Click Me
          </IonButton>
          <IonList>
            <IonItem>
              <IonLabel>Gender</IonLabel>
              <IonSelect
                placeholder="Select fruit"
                onIonChange={(e) => {
                  console.log(`ionChange fired with value: ${e.detail.value}`);

                  setState({
                    ...state,
                    step: 2,
                  });
                }}
                onIonCancel={() => console.log("ionCancel fired")}
                onIonDismiss={() => console.log("ionDismiss fired")}
              >
                <IonSelectOption value="apples">Apples</IonSelectOption>
                <IonSelectOption value="oranges">Oranges</IonSelectOption>
                <IonSelectOption value="bananas">Bananas</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          {state.step >= 2 && (
            <IonList>
              <IonItem>
                <IonLabel>Gender</IonLabel>
                <IonSelect
                  placeholder="Select fruit"
                  onIonChange={(e) => {
                    console.log(
                      `ionChange fired with value: ${e.detail.value}`
                    );

                    setState({
                      ...state,
                      step: 3,
                    });
                  }}
                >
                  <IonSelectOption value="apples">Apples</IonSelectOption>
                  <IonSelectOption value="oranges">Oranges</IonSelectOption>
                  <IonSelectOption value="bananas">Bananas</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          )}
          {state.step >= 3 && (
            <IonList>
              <IonItem>
                <IonLabel>Gender</IonLabel>
                <IonSelect placeholder="Select fruit">
                  <IonSelectOption value="apples">Apples</IonSelectOption>
                  <IonSelectOption value="oranges">Oranges</IonSelectOption>
                  <IonSelectOption value="bananas">Bananas</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default MainPage;
