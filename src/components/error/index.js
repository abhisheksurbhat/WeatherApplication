import React from 'react';

class Error extends React.Component {

  render() {
    return (
      <div>
        <h2 className="m-5 p-5">We're unable to fetch data for this city. Please
            try again with a different input.</h2>
        </div>
    )
  }
}

export default Error