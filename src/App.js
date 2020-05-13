import React, { useContext } from 'react';
import './App.css';
import { Home, Photography, Content } from './Routes';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './Components/';
import { Context } from './Components/Context/Context';

function App() {
  const {
    twitterData,
    instagramData,
    twitchData,
    twitchStream,
    twitchVOD,
    twitchFollowers,
  } = useContext(Context);

  return (
    <div className='App'>
      {twitterData && instagramData ? (
        <>
          <nav>
            <Navigation />
          </nav>
          <Switch>
            <Route
              exact
              path='/'
              render={(routeProps) => <Home {...routeProps} />}
            />
            <Route
              exact
              path='/Content'
              render={(routeProps) => <Content {...routeProps} />}
            />
            <Route
              exact
              path='/Photography'
              render={(routeProps) => <Photography {...routeProps} />}
            />
          </Switch>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default App;
