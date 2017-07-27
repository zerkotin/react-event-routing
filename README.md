# Event driven routing in React
2 of my biggest issues with React are Events and Routing, I have refactored my application several times becuase of these issues, in the end it was solved with a couple of simple classes.  

What is event driven routing?
1. we have an event manager.
2. we have a routable view.

The Event dispatch call for routing change on 'main-routable-view'  
`Events.dispatch('route', {target: 'main-routable-view', view: WelcomeView});`

The RoutableView with the name 'main-routable-view'
`<RoutableView name="main-routable-view" />`




