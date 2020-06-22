import React, {Component} from 'react';
import MapContainer from '../maps-container';

export default class ContactusComponent extends Component {
  constructor() {
    super();
    this.contacts = [
      {
        name: 'ABC Privated Limited 1',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564645',
        lat: 12.97,
        lng: 77.59,
      },
      {
        name: 'ABC Privated Limited 2',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564643',
        lat: 13.08,
        lng: 80.27,
      },
      {
        name: 'ABC Privated Limited 3',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564225',
        lat: 17.38,
        lng: 78.48,
      },
      {
        name: 'ABC Privated Limited 4',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564645',
        lat: 19.07,
        lng: 72.87,
      },
      {
        name: 'ABC Privated Limited 4',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564649',
        lat: 28.7,
        lng: 77.1,
      },
    ];
  }
  render() {
    return (
      <>
        <br />
        <br />
        <p className="h4">Contact Us</p>
        <br />
        {this.contacts && <MapContainer contacts={this.contacts} />}
      </>
    );
  }
}
