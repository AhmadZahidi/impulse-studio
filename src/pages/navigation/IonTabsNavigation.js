import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import AboutUs from "../AboutUs";
import FitnessCalc from "../FitnessCalc";
import HealthAdvice from "../HealthAdvice";
import Home from "../Home";
import { home, chatbox, heart, people } from "ionicons/icons";

const IonTabsNavigation = () => {
  return (
    <>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path="/Home">
            <Home />
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
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
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

export default IonTabsNavigation;
