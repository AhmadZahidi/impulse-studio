import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import MainPage from "./pages/MainPage";
import {
  triangle,
  images,
  square,
  home,
  chatbox,
  heart,
  people,
  settings,
} from "ionicons/icons";
import HealthAdvice from "./pages/HealthAdvice";
import FitnessCalc from "./pages/FitnessCalc";
import AboutUs from "./pages/AboutUs";
import IonMenuSetting from "./pages/IonMenuSetting";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* Bottom nav */}
    <IonReactRouter>
      <IonMenuSetting />
      <IonTabs>
        <IonRouterOutlet id="main">
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
    </IonReactRouter>
  </IonApp>
);

export default App;
