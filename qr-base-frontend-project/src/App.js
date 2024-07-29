import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/Home.js';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/home" component={Home} exact />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
    </IonReactRouter>
  </IonApp>
);

export default App;
