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

import BySpecialist from "./BySpecialist";
import ByStudio from "./ByStudio";




const NewBookingModals = () => {
  const [studio, setStudio] = useState(true);
  const [specialist,setSpecialist]=useState(false);

  const modal = useRef(null);
  const input = useRef(null);
  const [message, setMessage] = useState(
    "This modal example uses triggers to automatically open a modal when the button is clicked."
  );



  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev) {
    if (ev.detail.role === "confirm") {
      setMessage("Hello, ".concat(ev.detail.data, "!"));
    }
  }

  const segmentChanged = (e) => {
    console.log(e.detail.value);
  };
  return (
    <>
      <IonModal
        ref={modal}
        trigger="NewBooking"
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
            <IonSegment value={studio?"ByStudio":"BySpecialist"} onIonChange={(e) => segmentChanged(e)}>
              <IonSegmentButton value="ByStudio" onClick={()=>{setStudio(true); setSpecialist(false)}}>
                <IonLabel>BY STUDIO</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="BySpecialist" onClick={()=>{setStudio(false); setSpecialist(true)}}>
                <IonLabel>BY SPECIALIST</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {studio&& <ByStudio/>}
          {specialist&&<BySpecialist/>}
        </IonContent>
      </IonModal>
    </>
  );
};

export default NewBookingModals;