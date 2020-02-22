import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, FieldGroup, Button, CheckBox } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const EditKeg = (props) => {
  const linkStyling = {
    color: 'white',
    fontSize: '25px'
  };

  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _ibu = null;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    _ibu.value ? props.onEditKeg({name: _name.value, brand: _brand.value, price: parseFloat(_price.value), alcoholContent: parseFloat(_alcoholContent.value), ibu: parseFloat(_ibu.value), id: props.id}) 
    :
    props.onEditKeg({name: _name.value, brand: _brand.value, price: parseFloat(_price.value), alcoholContent: parseFloat(_alcoholContent.value), id: props.id});
    alert("Updated");
    _name.value = '';
    _brand.value='';
    _price.value='';
    _alcoholContent.value='';
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
                    font-size: 40px
                }

            `}</style>
      <div className="text-box">
        <h1>Edit keg:</h1>
        <form onSubmit={handleEditKegFormSubmission}>
          <FormGroup>
            <ControlLabel>Enter a name of beer:</ControlLabel>
            <input className="form-control"
              type="text" 
              placeholder={props.name} 
              defaultValue={props.name}
              id="name"
              ref={(input) => {_name = input;}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter name of brand:</ControlLabel>
            <input className="form-control"
              type="text" 
              placeholder={props.brand} 
              defaultValue={props.brand}
              id="brand"
              ref={(input) => {_brand = input;}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter a price:</ControlLabel>
            <input className="form-control"
              type="number" 
              step="0.01" 
              placeholder={props.price} 
              defaultValue={props.price}
              id="price"
              ref={(input) => {_price = input;}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter an alcohol content:</ControlLabel>
            <input className="form-control"
              type="number" 
              step="0.01" 
              placeholder={props.alcoholContent} 
              defaultValue={props.alcoholContent} 
              id="alcoholContent"
              ref={(input) => {_alcoholContent = input;}}/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Enter an IBU (optional):</ControlLabel>
            <input className="form-control"
              type="number" 
              placeholder={props.ibu} 
              defaultValue={props.ibu}
              id="ibu" 
              ref={(input) => {_ibu = input;}}/>
          </FormGroup>

          <button type="submit" className="btn btn-primary btn-custom">Submit</button>
        </form>
      </div>

    </div>
  );
};

EditKeg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  ibu: PropTypes.number,
  id: PropTypes.string,
  onEditKeg: PropTypes.func
};

export default EditKeg;