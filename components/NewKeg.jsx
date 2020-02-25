import React from 'react';
import {FormGroup, ControlLabel} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

class NewKeg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    this._name = null;
    this._brand = null;
    this._price = null;
    this._abv = null;
    this._ibu = null;
    this.handleNewKegFormSubmission = this.handleNewKegFormSubmission.bind(this);
  }

  handleNewKegFormSubmission(event) {
    event.preventDefault();
    this.props.onNewKegCreation({name: this._name.value, brand: this._brand.value, price: parseFloat(this._price.value), alcoholContent: parseFloat(this._abv.value), ibu: parseFloat(this._ibu.value), pints: 124});
    this._name.value = '';
    this._brand.value='';
    this._price.value='';
    this._abv.value='';
    this._ibu.value='';
    this.setState({redirect: true});
  }   

  render() {
    if (this.state.redirect) {
      return <Redirect to="/account"/>;
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
          <form onSubmit={this.handleNewKegFormSubmission}>
            <FormGroup>
              <ControlLabel>Enter a name of beer:</ControlLabel>
              <input className="form-control"
                type="text" 
                placeholder="" 
                id="name"
                ref={(input) => {this._name = input;}}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Enter name of brand:</ControlLabel>
              <input className="form-control"
                type="text" 
                placeholder="" 
                id="brand"
                ref={(input) => {this._brand = input;}}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Enter a price:</ControlLabel>
              <input className="form-control"
                type="number" 
                step="0.01" 
                placeholder="" 
                id="price"
                ref={(input) => {this._price = input;}}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Enter an alcohol content:</ControlLabel>
              <input className="form-control"
                type="number" 
                step="0.01" 
                placeholder="" 
                id="abv"
                ref={(input) => {this._abv = input;}}/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Enter an IBU (optional):</ControlLabel>
              <input className="form-control"
                type="number" 
                placeholder=""
                id="ibu" 
                ref={(input) => {this._ibu = input;}}/>
            </FormGroup>

            <button type="submit" className="btn btn-primary btn-custom">Submit</button>
          </form>
        </div>

      </div>
    );
  }
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;