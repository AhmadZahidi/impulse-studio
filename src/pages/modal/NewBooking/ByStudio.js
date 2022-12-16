import {
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

const ByStudio = () => {

    const [selected,setSelected]=useState(0);

  return (
    <>
      <IonList lines="none">
        <IonTitle>Choose Country</IonTitle>

        <IonItem>
          <IonSelect placeholder="Tap to choose country" onIonChange={(e)=>{
            setSelected(selected+1);
          }}>
            <IonSelectOption value="china">China</IonSelectOption>
            <IonSelectOption value="germany">Germany</IonSelectOption>
            <IonSelectOption value="malaysia">Malaysia</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
    </>
  );
};

export default ByStudio;
