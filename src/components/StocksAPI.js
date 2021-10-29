

import React, { useState, useEffect } from 'react';
import StocksHeader from './StocksHeader';
import StocksFooter from './StocksFooter';
import 'bootstrap/dist/css/bootstrap.css';

function StocksAPI() {
  const [Data,setData]=useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const allData = [];
  
  var url = 'https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=zPejacn6XxwRcHAahnN3uhRoZw3mwoCCb5p4SHQf';

  //var url = 'https://coffee.alexflipnote.dev/random.json';
  var req = new Request(url);
  var headers = {};

  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
        .then(resp => resp.json())
        .then(resp => {
          setData(resp)
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
    }, []) 
    
    
    if(error)
    {
      return <>
                <div className='media'> 
                <img className="align-self-start mr-3"  style={{backgroundColor: '#02898a' }}/>
                <div className="media-body"> 
                  {Data.message}
                </div>
                </div>
              </>;
    }
    else{
      for (const property in Data) {
        const temp = Data[property];
        for (const propertyTwo in temp) {
            if(temp[propertyTwo].ticker !== undefined)
            {
                allData.push(
                    <>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded"> 
                        <h3 className="mt-0">{temp[propertyTwo].ticker}</h3>
                        <div class="row">
                            <div className="col-sm">
                                <div className="row">
                                    <div className="smallScreens col">
                                        Name: 
                                    </div>
                                    <div className="smallScreens bold-it col">
                                        {temp[propertyTwo].name}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="smallScreens col">
                                        Current Price: 
                                    </div>
                                    <div className="smallScreens style-money-one col">
                                        ${temp[propertyTwo].price}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="smallScreens col">
                                        Volume Traded: 
                                    </div>
                                    <div className="smallScreens bold-it col">
                                        {temp[propertyTwo].volume}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="smallScreens col">
                                        Previous Close Price: 
                                    </div>
                                    <div className="smallScreens style-money-one col">
                                        ${temp[propertyTwo].previous_close_price}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm">
                                <div className="row">
                                    <div className="smallScreens col">
                                        Today's Open: 
                                    </div>
                                    <div className="smallScreens bold-it col">
                                        ${temp[propertyTwo].day_open}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="smallScreens col">
                                        Today's Low: 
                                    </div>
                                    <div className="smallScreens style-money-two col">
                                        ${temp[propertyTwo].day_low}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="smallScreens col">
                                        Today's High: 
                                    </div>
                                    <div className="smallScreens col style-money-one">
                                        ${temp[propertyTwo].day_high}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="smallScreens col">
                                        Today's Change: 
                                    </div>
                                    <div className="smallScreens col bold-it">
                                        ${temp[propertyTwo].day_change}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                  );
            }
        }
      }
    }
    
  return (
    
    <div className="container">
      <StocksHeader />
      {allData}
      <StocksFooter />
    </div>
  )
}

export default StocksAPI