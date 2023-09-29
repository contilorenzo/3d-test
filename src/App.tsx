import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
    return (
        <>
            <div className="section section--landing">
                <img className={"logo"} src={"/nintendoLogo.png"} alt="Ninendo Logo" height="92"></img>
                <Spline scene="https://prod.spline.design/YViuqisJHgS1Wy4v/scene.splinecode"/>
                <h1 className="landing-title">NINTENDO<br/>SWITCH</h1>
            </div>
            <div className="section">
                <div className="col">
                    <h2>Titolo wow</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Libero nunc et ultrices nulla elit neque ullamcorper ultricies.</p>
                    <button>Scopri di più</button>
                </div>
                <div className="col">
                    <Spline scene="https://prod.spline.design/27p4AXgvHV5LD3Sw/scene.splinecode"/>
                </div>
            </div>
            <div className="section">
                <div className="col">
                    <Spline scene="https://prod.spline.design/27p4AXgvHV5LD3Sw/scene.splinecode"/>
                </div>
                <div className="col">
                    <h2>Titolo wow</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Libero nunc et ultrices nulla elit neque ullamcorper ultricies.</p>
                    <button>Compra</button>
                </div>
            </div>
        </>
    )
}

export default App
