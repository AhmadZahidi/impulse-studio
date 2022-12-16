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

import NewBookingModals from "./modal/NewBooking/NewBookingModals";

const Home = () => {
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
            <IonButton id="NewBooking" expand="block">
              NewBooking
            </IonButton>

            <NewBookingModals />

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
