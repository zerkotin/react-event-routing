import React from 'react';
import Events from './Events.js';

/*
name - the id for the route target to identify
view - the view for init
data - the data for the view to init
*/
class RoutableView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      view: props.view,
      data: props.data
    }

    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  componentDidMount() {
    Events.on('route', this.handleRouteChange);
  }

  handleRouteChange(route) {
    if(!route) return;
    if(route.target !== this.props.name) return;

    this.setState({
      view: route.view,
      data: route.data
    });
  }

  render() {
    return (
      <this.state.view data={this.state.data}/>
    );
  }

}
export default RoutableView;
