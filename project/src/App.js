import { Switch, Route, NavLink } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <>
      <h1> {'>>>'} Incredible Superhero Store {'<<<'} </h1>
      <h1>Welcome Comic Lover!</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/newcharacter">New Character</NavLink>
        <br />
        <NavLink to='/character/1'>TEST::REMOVE Single Character</NavLink>
        <br />
      </div>
      <Switch>
        <Route path='/' exact>Home Page</Route>
        <Route path='/newcharacter'>New Character Form</Route>
        <Route path='/character/:charId'>Single Character Detail</Route>
      </Switch>
    </>
  );
}

export default App;
