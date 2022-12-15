import { Redirect, Route } from "react-router-dom";

import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { chatbox, heart, home, people } from "ionicons/icons";
import React from "react";
import AboutUs from "./AboutUs";
import FitnessCalc from "./FitnessCalc";
import HealthAdvice from "./HealthAdvice";
import MainPage from "./MainPage";

const TabBarNav = () => {
  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/MainPage">
            <MainPage />
          </Route>
          <Route exact path="/HealthAdvice">
            <HealthAdvice />
          </Route>
          <Route path="/FitnessCalc">
            <FitnessCalc />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/">
            <Redirect to="/MainPage" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="MainPage" href="/MainPage">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="HealthAdvice" href="/HealthAdvice">
            <IonIcon icon={chatbox} />
            <IonLabel>Health Advice</IonLabel>
          </IonTabButton>
          <IonTabButton tab="FitnessCalc" href="/FitnessCalc">
            <IonIcon icon={heart} />
            <IonLabel>Fitness Calculator</IonLabel>
          </IonTabButton>
          <IonTabButton tab="AboutUs" href="/AboutUs">
            <IonIcon icon={people} />
            <IonLabel>About Us</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default TabBarNav;
