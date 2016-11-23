import React from 'react';
import '../css/Sidebar.css';

class Sidebar extends React.Component {
  constructor() {
    super();
  }

  genList(PDFLists) {
    let list = [];
    for (const property in PDFLists) {
      if (PDFLists.hasOwnProperty(property)) {
        // do stuff
        list.push(
          <li key={property}>
            <ul>
              {PDFLists[property].map((obj, index) => {
                return (
                  <li key={index}>{obj}</li>
                );
              })}
            </ul>
          </li>
        )
      }
    }
    return list;
  }

  render() {
    const { PDFLists } = this.props;
    return (
      <div className="sidebar">
        <ul>
          { this.genList(PDFLists) }
        </ul>
      </div>
    );
  }
}

module.exports = Sidebar;
