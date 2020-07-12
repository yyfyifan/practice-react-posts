import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Home, About, Contact, Posts, AddPost } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/addPost" component={AddPost}></Route>
            <Route path="/:pid" component={Posts}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
