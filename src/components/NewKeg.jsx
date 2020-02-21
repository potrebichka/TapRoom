import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, FieldGroup, Button, CheckBox } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const NewKeg = (props) => {
  const linkStyling = {
    color: 'white',
    fontSize: '25px'
  };

  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _ibu = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, ibu: _ibu.value});
    _name.value = '';
    _brand.value='';
    _price.value='';
    _abv.value='';
    _ibu.value='';
  }   

  return (
    <div>
      <style jsx>{`
        .text-box {
            background-color: rgba(0,0,0,0.7);
            font-size: 25px;
            margin: 20px auto;
            color: white;
            font-weight: 200;
            padding: 40px;
            text-align: center;
            max-width: 900px;
        }
        .btn-custom {
            font-size: 30px;
            border-radius: 10px;
        }
      `}</style>

      <div className="text-box">
        <h1>Add a new keg:</h1>
        <form onSubmit={handleNewKegFormSubmission}>
          <FormGroup>
            <ControlLabel>Enter a name of beer:</ControlLabel>
            <input className="form-control"
              type="text" 
              placeholder="" 
              id="name"
              ref={(input) => {_name = input;}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter name of brand:</ControlLabel>
            <input className="form-control"
              type="text" 
              placeholder="" 
              id="brand"
              ref={(input) => {_brand = input;}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter a price:</ControlLabel>
            <input className="form-control"
              type="number" 
              step="0.01" 
              placeholder="" 
              id="price"
              ref={(input) => {_price = input;}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter an alcohol content:</ControlLabel>
            <input className="form-control"
              type="number" 
              step="0.01" 
              placeholder="" 
              id="abv"
              ref={(input) => {_abv = input;}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter an IBU (optional):</ControlLabel>
            <input className="form-control"
              type="number" 
              placeholder=""
              id="ibu" 
              ref={(input) => {_ibu = input;}}/>
          </FormGroup>

          <button type="submit" className="btn btn-primary btn-custom">Submit</button>
        </form>
      </div>

    </div>
  );
};

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;