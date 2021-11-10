import "./App.css"

function App() {
  const imgUrl = require(`./cartman.jpg`).default

  return (
    <div className="container">
      <h1 className="text">ROCKY TAGS</h1>
      <div data-product-id="111111" data-product-name='Eric Cartman' data-product-brand='South Park' data-product-price="0" data-product-position="1" data-product-category="Evil">
          <img className="img" alt='Cartman' src={imgUrl} />
          <button className='button' data-button-prop='Property 1' data-button-prop2='Property 2' data-button-prop3='Property 3'>Click</button>
      </div>      
    </div>
  );
}

export default App;
