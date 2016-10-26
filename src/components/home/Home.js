
import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return(
      <div >
        <Link to ="about"> Read more </Link>
      </div>
    );
  }
}
export default Home;
