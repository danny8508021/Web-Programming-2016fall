import React from 'react';
import '../css/Sidebar.css';

class Sidebar extends React.Component {
  constructor() {
    super();
  }

  genList(PDFLists, setCurPDF) {
    let list = [];
    for (const property in PDFLists) {
      if (PDFLists.hasOwnProperty(property)) {
        // do stuff
        list.push(
          <li key={property}>
            <h3>{property}</h3>
            <ul className="pdflist">
              {PDFLists[property].map((obj, index) => {
                return (
                  <li key={index}>
                    <a className="pdfLink" onClick={() => setCurPDF(obj)}>{obj}</a>
                  </li>
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
    const { PDFLists, setCurPDF } = this.props;
    return (
      <div className="sidebar">
        <ul className="pdflists">
          { this.genList(PDFLists, setCurPDF) }
        </ul>
      </div>
    );
  }
}

module.exports = Sidebar;
