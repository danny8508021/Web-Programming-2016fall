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
      <div className="col-md-3">
        <ul className="nav nav-pills nav-stacked">
          <li><a href="#">jedan</a></li>
          <li><a href="#">dva</a></li>
          <li><a href="#">tri</a></li>
        </ul>
      </div>
    );
  }
}
//        <ul className="pdflists">
//          { this.genList(PDFLists, setCurPDF) }
//        </ul>

module.exports = Sidebar;
