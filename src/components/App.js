
// This component i use it to handle the app template every pages
import React , {PropTypes} from 'react';
import Header from './header/Header';
import Headertop from './header/Header-top'

class App extends React.Component {
  render() {
    return(
      <div>
        <Headertop/>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;
