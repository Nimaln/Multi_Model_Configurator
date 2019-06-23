/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Jaime Rosales 2016 - Forge Developer Partner Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////

// Models

import React, { Component } from 'react';
//import scrollTo from 'scroll-to';
import Helpers from '../Viewer/Viewer-Helpers';
import './Gallery.css';


const tilesData = [
  {
    img: 'images/Chair.jpg',
    title: 'chair',
    key: '0001',
    urn:'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZnVybml0dXJlL0Z1cm5pdHVyZV9DaGFpcnMtU3Rvb2xzLUJlbmNoZXNfQUJBLVNrb2xfQ2hhaXItRmFubnktU0gtMzgtY20uZmJ4'
  },
  {
    img: 'images/white_board.jpg',
    title: 'white_board',
    key: '0002',
    urn: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZnVybml0dXJlL0Z1cm5pdHVyZV9PdGhlcl9BYnN0cmFjdGFfRHJhZnQuZmJ4'
  },
  {
    img: 'images/Table.jpg',
    title: 'Table',
    key: '0003',
    urn: 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZnVybml0dXJlL0Z1cm5pdHVyZV9UYWJsZXNfQUJBLVNrb2xfVGFibGUtTWFyY3VzLTEwMC14LTEwMC1jbS1iaXJjaC5mYng='
  }
];


class Gallery extends Component {

  onTileSelect(tile, e) {
    e.preventDefault();
    Helpers.loadNextModel(tile.urn)
  }

   render() {
    return (
      <div className="forge-gallery">
        <div>
          <div>
            {tilesData.map((tile, index) =>
              (
                <div className="tile" key={index}>
                  <a href="#" onClick={this.onTileSelect.bind(this, tile)}>
                    <img className="tile-avatar" src={tile.img} alt={tile.title} />
                  </a>
                   <div className="tile-title">{tile.title}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
	}
}

export default Gallery;
