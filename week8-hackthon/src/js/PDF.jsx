import React from 'react';
import '../css/PDF.css';

class PDF extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { destination } = this.props;
    return (
      <div
        className="pdf-wrapper responsive-wrapper"
        style={{ WebkitOverflowScrolling: 'touch', overflow: 'auto' }}
      >
        <iframe src={destination}>
          <p>
            <em>
              <strong>ERROR: </strong>
              An &#105;frame should be displayed here but your
              browser version does not support &#105;frames.
            </em>
            Please update your browser to its most recent version
            and try again, or access the file
            <a href={destination}>with this link.</a>
          </p>
        </iframe>
      </div>
    );
  }
}

module.exports = PDF;
