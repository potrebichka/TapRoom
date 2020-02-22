import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import EditKeg from './EditKeg';
import {Button, Checkbox} from 'react-bootstrap';

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pints: 124,
      showEdit: false
    };
    this.onEditKeg = this.onEditKeg.bind(this);
  }

  onEditKeg(updatedKeg) {
    this.setState({showEdit: false});
    this.props.onEditKeg(updatedKeg);
  }
  
  render() {
    let strengthClass = null;
    if (this.props.alcoholContent < 2) {
      strengthClass = 'first';
    } else if (this.props.alcoholContent < 4) {
      strengthClass = 'second';
    } else if (this.props.alcoholContent < 6) {
      strengthClass = 'third';
    } else if (this.props.alcoholContent < 8) {
      strengthClass = 'fourth';
    } else if (this.props.alcoholContent < 10) {
      strengthClass = 'fifth';
    } else {
      strengthClass = 'sixth';
    }
    var soldButtonStyle = {
      fontSize: '20px',
      backgroundColor: "black",
      color: "white",
      border: "1px solid white"
    };
    return (
      <div className={this.props.employee ? this.state.pints <=10 ? 'keg employee red':'keg employee' : 'keg'}>
        <style jsx>{`
          .keg {
              background: rgba(0,0,0,0.5);
              min-width: 400px;
              padding: 10px;
              margin: 15px;
              text-align: center;
              border: 1px solid white;
          }

          .left {
            margin-left: 20px;
            float: left;
          }

          .right {
            float: right;
            margin-right: 20px;
          }
          .first {
            color: #DAF7A6;
          }
          .second {
            color:#FFC300;
          }
          .third {
            color: #FF5733;
          }
          .fourth {
            color:#C70039;
          }
          .fifth {
            color: #900C3F;
          }
          .sixth {
            color: #581845;
          }

          .employee {
            text-align: left;
            padding: 40px;
            max-width: 600px;
            width: 70%;
            margin: auto;
            font-family: monospace
          }

          .employee p {
            margin-bottom : 5px;
          }

          .red {
            border: 3px solid red;
          }

          .btn-custom {
            background-color: black
          }

          .text {
            color: white
          }

        `}</style>

        <h3> {this.props.employee ? 'Name: ' : null}  {this.props.name}</h3>
        <p> {this.props.employee ? 'Brand: ' : null} <em>{this.props.brand}</em></p>
        <p> {this.props.employee ? 'Price: ' : null} ${this.props.price}</p>
        {this.props.employee ? 
          <p>
            Strength: 
            <span className={strengthClass}>
              {this.props.alcoholContent}% ABV
            </span>
            <br/>
            <span>
              IBU: {this.props.ibu ? `${this.props.ibu} IBU`: 'NO IBU'}
            </span>
          </p>
          :
          <p>
            <span className={'left ' + strengthClass}>
              {this.props.alcoholContent}% ABV
            </span>
            <span className="right">
              {this.props.ibu ? `${this.props.ibu} IBU`: 'NO IBU'}
            </span>
          </p>
        }

        {this.props.employee ? 
          <div>
            <pre><span className="text">Pints left: {this.state.pints <= 0 ? 0 : this.state.pints}</span>      <Button 
              className="btn" style={soldButtonStyle}
              onClick={() => this.setState({pints: this.state.pints > 1 ? this.state.pints-10 : this.state.pints})}>
              Sold one pint
            </Button>
            </pre>
            <br/>
    

            <Checkbox 
              onChange={() => this.setState({showEdit: !this.state.showEdit})} defaultChecked={this.state.showEdit} checked={this.state.showEdit}>
              Edit info
            </Checkbox>

            {this.state.showEdit ? 
              <EditKeg 
                onEditKeg={updatedKeg => this.onEditKeg(updatedKeg)}
                name={this.props.name} 
                brand={this.props.brand} 
                price={this.props.price} 
                alcoholContent={this.props.alcoholContent} 
                ibu={this.props.ibu}
                id={this.props.id}/> 
              : null}

          </div> 
          : null}

      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  ibu: PropTypes.number,
  id: PropTypes.string,
  employee: PropTypes.bool,
  onEditKeg: PropTypes.func
};

export default Keg;