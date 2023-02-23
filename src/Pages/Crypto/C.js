import { useState, useEffect } from 'react';
import './C.css';


function Coin() {
  const [suchL, setSuchL] = useState([]);
  const [c, setC] = useState([]);
  useEffect(() => {
    async function CC() {
      const res = await fetch(`https://api.coinpaprika.com/v1/tickers`);
      setC(await res.json());
    }
    CC();
  }, []);
console.log(c);
  return (
    <span className='newBody'>
    <div className='Hcontainer'>
      <p className='inputContainer'>
        <input className='suche' placeholder='Bitcoin.... ' onChange={(e) => setSuchL(e.target.value.toLowerCase())} /> {//wtf bor why 
} 
        </p>
      {c.filter((item) => {
return suchL ==="" ? item : item.name.toLowerCase().includes(suchL)
}).map((coins, index) => {
          return (
            <div className='Ccontainer' key={index}>
              <span className='fir'>
                <span className='jonge'>
                  <p>Rank: {coins.rank}</p>
                  <p> {coins.symbol}</p>
                </span>
                <span className='sec'>
                <p> {coins.name}</p>
                  <p> Current Value {coins.quotes.USD.price.toFixed(2)}$</p>
                  <p> Beta Value {coins.beta_value}</p>
                </span>
              </span>
            </div>
          );
        })
      }
    </div>
    </span>
  );
}
export default Coin;