import React, { useState, useRef } from "react";

import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
  IonModal,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import "./Home.css";

const Home = () => {
  const modal = useRef(null);
  const input = useRef(null);
  const [message, setMessage] = useState(
    "This modal example uses triggers to automatically open a modal when the button is clicked."
  );

  const [studio, setStudio] = useState();
  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev) {
    if (ev.detail.role === "confirm") {
      setMessage("Hello, ".concat(ev.detail.data, "!"));
    }
  }

  const segmentChanged = (e) => {
    // console.log(e.detail.value);
    e.detail.value == "ByStudio" ? setStudio(true) : setStudio(false);
    console.log(studio);
  };

  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="full">
            <IonButton id="open-modal" expand="block">
              NewBooking
            </IonButton>

            <IonModal
              ref={modal}
              trigger="open-modal"
              onWillDismiss={(ev) => onWillDismiss(ev)}
            >
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonButton onClick={() => modal.current?.dismiss()}>
                      Cancel
                    </IonButton>
                    <IonTitle>Impulse Studio</IonTitle>
                  </IonButtons>
                </IonToolbar>
                <IonToolbar>
                  <IonSegment
                    value="all"
                    onIonChange={(e) => segmentChanged(e)}
                  >
                    <IonSegmentButton value="ByStudio">
                      <IonLabel>BY STUDIO</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Favourites">
                      <IonLabel>BY SPECIALIST</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonToolbar>
              </IonHeader>
              <IonContent></IonContent>
            </IonModal>

            <IonButton id="open-modal" expand="block">
              My Booking
            </IonButton>
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
