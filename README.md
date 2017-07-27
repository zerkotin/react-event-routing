# Event driven routing in React
2 of my biggest issues with React are Events and Routing, I have refactored my application several times becuase of these issues, in the end it was solved with a couple of simple classes.  

What is event driven routing?
1. We have an event manager [Events](Events.js)
2. We have a routable view [RoutableView](RoutableView.jsx)
 
### How to use
The Event dispatch call for routing change on 'main-routable-view'  
`Events.dispatch('route', {target: 'main-routable-view', view: WelcomeView});`

The RoutableView with the name 'main-routable-view'  
`<RoutableView name="main-routable-view" />`


The result: 'main-routable-view' will load 'WelcomeView'  
_Routable view is automatically listening to an event called 'route' and checks if the target is itself._


# Global Events
Now we can send events cross components.  
Consider the next 2 files:

```
import React from 'react';
import Events from from './Events.js';

class SomeView extends React.Component {
  componentDidMount() {
    Events.on('user-data', data => setState({data: data})); //listen to 'user-data' event
  }
  
  render() {
    <div>{this.state.data}</div>
  }
}
```


```
import Events from './Events.js';

fetch('user.json').then(res => Events.dispatch('user-data', res.data)); //get data from server and dispatch an event
```



