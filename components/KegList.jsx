import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import paletteImg from '../assets/images/Palette.png';
import {Link} from 'react-router-dom';

const KegList = (props) => {
  return (
    <div>
      <style jsx>{`
                .text-box {
                    background-color: rgba(0,0,0,0.7);
                    font-size: 25px;
                    margin: 20px;
                    color: white;
                    font-weight: 200;
                    padding: 20px
                }
                .text-box h1 {
                    text-align: center;
                }
                .kegs-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }
                .text-box a {
                  font-size: 30px;
                }
                img {
                  width: 300px;
                }
                .right {
                  text-align: right;
                }
                .space {
                  color: white;
                }
                .employee-list {
                  text-align: left;
                }
                .center {
                  text-align: center;
                  font-size: 30px;
                  font-weight: bold;
                }
            `}</style>
      <div className="text-box">
        <h1>List of available kegs:</h1>
        <br/>
        {props.employee ? 
          <div className="center"><Link to="/newkeg" >Create a new Keg</Link></div> : 
          <div className="right"> 
            Strength(ABV)<br/>
            <img src={paletteImg} alt="strength palette"/>
            <pre className="space">0                      12</pre>  
          </div>
        }
        <div className={props.employee ? 'employee-list': 'kegs-list'}>
          {Object.keys(props.kegList).map(function(kegId)
          {
            var keg = props.kegList[kegId];
            return <Keg name={keg.name} 
              brand={keg.brand} 
              price={keg.price} 
              alcoholContent={keg.alcoholContent} 
              ibu={keg.ibu}
              key={kegId}
              id={kegId}
              pints={keg.pints}
              employee={props.employee}
              onEditKeg={props.onEditKeg}
              onPintsChange={props.onPintsChange}
            />;
          }
          )}
        </div>
      </div>

    </div>
  );
  
};

KegList.propTypes = {
  kegList: PropTypes.object.isRequired,
  employee: PropTypes.bool.isRequired,
  onEditKeg: PropTypes.func,
  onPintsChange: PropTypes.func
};


export default KegList;