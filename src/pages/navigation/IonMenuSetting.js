import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonMenuToggle,
} from "@ionic/react";

const IonMenuSetting = () => {
  return (
    <>
      <IonMenu contentId="main" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList lines="full">
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/MainPage">
                  Home
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/">
                  New Booking
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/">
                  My Booking
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/">
                  My Membership
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/">
                  Buy Pulses
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/">
                  My Records
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/FitnessCalc">
                  Fitness Calculator
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/HealthAdvice">
                  Health Advice
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/AboutUs">
                  About Us
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonButton fill="clear" routerLink="/">
                Trial Session
              </IonButton>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/">
                  Studio Location
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/">
                  Impulse Specialists
                </IonButton>
              </IonMenuToggle>
            </IonItem>
            <IonItem>
              <IonMenuToggle>
                <IonButton fill="clear" routerLink="/">
                  Logout
                </IonButton>
              </IonMenuToggle>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default IonMenuSetting;
