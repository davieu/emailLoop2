import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>DASHBOARD</h2>;
const SurveyNew = () => <h2>SURVEYNEW</h2>;
const Landing = () => <h2>LANDING</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact={true} path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

export default App;
