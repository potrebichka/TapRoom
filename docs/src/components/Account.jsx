import React from 'react';
import KegList from './KegList';

const Account = () => {
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
            `}</style>
      <div className="text-box">
        <KegList employee={true}/>
      </div>
    </div>
  );
};

export default Account;