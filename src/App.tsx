import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
    return (
        <>
            <div className="section section--landing">
                <img className={"logo"} src={"/nintendoLogo.png"} alt="Ninendo Logo" height="92"></img>
                <Spline scene="https://prod.spline.design/elv65hIGsU4k2hEY/scene.splinecode"/>
                <h1 className="landing-title">NINTENDO<br/>SWITCH</h1>
            </div>
            <div className="section">
                <div className="col">
                    <h2>Titolo wow</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Libero nunc et ultrices nulla elit neque ullamcorper
                        ultricies.</p>
                    <button>Scopri di più</button>
                </div>
                <div className="col" style={{width: '800px'}}>
                    <Spline scene="https://prod.spline.design/27p4AXgvHV5LD3Sw/scene.splinecode"/>
                </div>
            </div>
            <div className={"section--bg"}>
                <div className="section ">
                    <div className="col pos__rel">
                        <Spline scene="https://prod.spline.design/27p4AXgvHV5LD3Sw/scene.splinecode"/>
                        <div className={"spline__ripple"}></div>
                    </div>
                    <div className="col">
                        <h2>Titolo wow</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero nunc et ultrices nulla elit neque ullamcorper
                            ultricies.</p>
                        <button>Compra</button>
                    </div>
                </div>
            </div>
            <div className="section--coins">
                <div className="section ">
                    <div className="section--text">
                        <h2 className="play">Play</h2>
                        <h2 className="together">TOGETHER</h2>
                    </div>
                    <div className="spline--coins">
                        <Spline scene="https://prod.spline.design/KLcO3x3CMmeXLLXh/scene.splinecode"/>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="col">
                    <Spline scene="https://prod.spline.design/27p4AXgvHV5LD3Sw/scene.splinecode"/>
                </div>
                <div className="col">
                    <h2>Titolo wow</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Libero nunc et ultrices nulla elit neque ullamcorper
                        ultricies.</p>
                    <button>Compra</button>
                </div>
            </div>
            <div className="section">
                <Spline scene="https://prod.spline.design/jxuvmEOIUHKAhzD4/scene.splinecode" />
            </div>
        </>
    )
}

export default App
