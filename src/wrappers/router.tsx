import HomeContainer from 'modules/home/components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
