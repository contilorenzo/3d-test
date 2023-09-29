import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <>
      <div className="section">
        <Spline scene="https://prod.spline.design/YViuqisJHgS1Wy4v/scene.splinecode" />
        <h1 className="landing-title">NINTENDO<br/>SWITCH</h1>
      </div>
      <div className="section">
        <div className="col">
          <Spline scene="https://prod.spline.design/27p4AXgvHV5LD3Sw/scene.splinecode" />
        </div>
        <div className="col">
          <h2>Titolo wow</h2>
          <p className="fixed-dim">Zò desfà pestulàda marcantòne fiocà formài. Saltà uzà spenelà braghe zùen cantinér.</p>
          <button>Compra</button>
        </div>
      </div>
    </>
  )
}

export default App
