import Brake from "./Brake"
import "./general.css"
import Session from "./Session"
import Timer from "./Timer"

function App() {


  return (
    <>
      <div className="twoC">
        <Session />
        <Brake />
      </div>
      <Timer />
    </>
  )
}

export default App