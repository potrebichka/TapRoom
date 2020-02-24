import React from 'react';

const Main = () => {
    
  return (
    <main className="main">
      <style jsx>{`
                .main {
                    display: grid;
                }

                .text-box {
                    background-color: rgba(0,0,0,0.7);
                    font-size: 25px;
                    margin: 20px;
                    color: white;
                    font-weight: 200;
                    padding: 20px
                }
                .left {
                    grid-column-start: 1;
                    grid-column-end: 2;
                }
                .right {
                    grid-column-start: 2;
                    grid-column-end: 4;
                    grid-row-start: 1;
                    grid-row-end: 4;
                }
            `}</style>
      <div className="text-box left">
        <h2>HOURS OF OPERATION</h2>
        <hr />
        <p>Our Taproom and production brewery is located at 38 Mercer Street in Seattle, Washington.</p>
        <p>Taproom Hours:<br/>
          Monday through Thursday: 2-9 pm <br />
          Friday & Saturday: 11 am-10 pm <br/>
          Sunday: 12-7 pm.</p>
        <p>Interested in hosting your next get together at the Taproom? Email events@mike.com for more information!</p>
      </div>
      <div className="text-box left">
        <h2>$2 POWER HOUR</h2>
        <p>Join us Monday through Sunday, from 9 pm - 11 pm for $2 pours!</p>
        <p>Power Hour includes selected "non-imperials" based upon available quantity, process, and ingredients. Please ask your bartender or check the draft boards!</p>
      </div>
      <div className="text-box left">
        <h2>KEG / DOCK SALES</h2>
        <p>Want to inquire about available kegs, pricing and ordering? Email sales@mike.com!</p>
      </div>
      <div className="text-box right">
        <p>In January 1999, after twelve months of building and planning, Mike’s started a new chapter at our production facility at 38 Mercer Street when we began packaging beers into kegs.Three months later we fired up the line and canned Waterfly Porter and Gocolungma, and the rest has been history in the making. We partnered with Tacamier distributing in September of 2014, around the same time we started canning Fire Papa, and were able to start off 2015 with the addition of Tok Byot cans. In February of 2016, we released Jazz Rye, just in time for Valentine’s Day!</p>
        <p>Our production facility provides the Mike’s team the room to play and think big - hence our arsenal of barrels! From rum and bourbon, to sherry and tequila barrels, we’ve been skillfully aging specialty beers since 2014. Bourbon barrel beers are packaged into 375 mL bottles, along side their non-barrel aged counterparts.</p>
        <p>99.9% of the beers that our loyal customers have consumed around the state in 2015 year have come from this facility, and we are grateful for the opportunity expand our efforts and get Mike’s beer into more hands across Washington.</p>
        <p>Equipped with 16 taps for you to enjoy beers straight from the source, our production brewery and taproom is open Monday through Thursday from 2-9 pm, Friday & Saturday from 11 am-10 pm & Sunday from 12-7 pm. The taproom offers a wide variety of merchandise, specialty and core beers, as well as carryout of all packaged kegs, cans and bottles.</p>
        <p>Our Taproom food cart offers a unique, delicious locally-sourced menu, Monday through Thursday 2-9 pm, Friday & Saturday 11 am-10 pm & Sunday from 12-7 pm.</p>
        <p>Interested in renting the taproom for your next company party, birthday party or get together? Email us at events@mike.com or use the brewery contact form.</p>
      </div>
    </main>
  );
};

export default Main;