import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
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
                    justify-content: space-between;
                }
                .text-box a {
                  font-size: 30px;
                }
            `}</style>
      <div className="text-box">
        <h1>List of available kegs:</h1>
        <div className="kegs-list">
          {Object.keys(props.kegList).map(function(kegId)
            {
              var keg = props.kegList[kegId];
              return <Keg name={keg.name} 
                brand={keg.brand} 
                price={keg.price} 
                alcoholContent={keg.alcoholContent} 
                ibu={keg.ibu}/>
            }
          )}
        </div>
      </div>

    </div>
  );
  
};

KegList.propTypes = {
  kegList: PropTypes.object.isRequired
};


export default KegList;