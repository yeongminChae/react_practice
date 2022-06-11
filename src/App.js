import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState();
  const [inverted, setInverted] = useState(false);
  const [index, setIndex] = useState();
  const reset = () => setAmount(0);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const flipped = () => {
    setInverted((current) => !inverted);
    reset();
  };
  const onSelect = (event) => {
    return setIndex(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
      <label>Choose the coins : </label>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect} value={index}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}: ${coin.quotes.USD.price} USD)
            </option>
          ))}
        </select>
      )}
      <hr />
      <div>
        <label>USD($) : </label>
        <input
          onChange={onChange}
          value={inverted ? amount * 29269.9871 : amount}
          placeholder="Amount of USD$"
          type="number"
          disabled={inverted}
        />
      </div>
      <div>
        <label>
          {/* {coins.map((coin) => ())} */}
          Bitcoin
        </label>
        <input
          onChange={onChange}
          value={inverted ? amount : amount / 29269.9871}
          placeholder="Amount of Coin"
          type="number"
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={flipped}>{inverted ? "Turn Back" : "inverted"}</button>
    </div>
  );
}

export default App;
