import React, {useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import NoMatch from './containers/NoMatch/NoMatch';


function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
