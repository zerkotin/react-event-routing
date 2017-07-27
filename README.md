# Event driven routing in React
2 of my biggest issues with React are Events and Routing, I have refactored my application several times becuase of these issues, in the end it was solved with a couple of simple classes.  

What is event driven routing?
1. we have an event manager.
2. we have a routable view.

The Event dispatch call for routing change on 'main-routable-view'  
`Events.dispatch('route', {target: 'main-routable-view', view: WelcomeView});`

The RoutableView with the name 'main-routable-view'  
`<RoutableView name="main-routable-view" />`


The result: 'main-routable-view' will load 'WelcomeView'  

How do we make this magic happen?

- [EventManager](Events.js)
- [RoutableView](RoutableView.jsx)


What else can we do with the EventManager?! we can send events cross components.  
Consider the next 2 files:

```
import React from 'react';
import Events from from './Events.js';

class SomeView extends React.Component {
  componentDidMount() {
    Events.on('user-data', data => setState({data: data}));
  }
  
  render() {
    <div>{this.state.data}</div>
  }
}
```


```
import Events from './Events.js';

fetch('user.json').then(res => Events.dispatch('user-data', res.data));
```



