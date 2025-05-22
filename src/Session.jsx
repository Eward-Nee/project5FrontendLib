import "./general.css"
import { useDispatch, useSelector } from "react-redux"
import { actionTimer } from "./reducers"

function Session() {
    const dispatch = useDispatch()
    const sessionNumber = useSelector((state) => state.timer.sessionNumber)

    function handleInc() {
        if (sessionNumber < 60) {
            dispatch(actionTimer.incSession())
        }
    }

    function handleDec() {
        if (sessionNumber > 1) {
            dispatch(actionTimer.decSession())
        } else if (sessionNumber < 1){
            dispatch(actionTimer.incSession())
        }
    }


    return (
        <div className="session">
            <label id="session-label">Session Length</label><br />
            <label id="session-length">{sessionNumber}</label> <br />
            <button id="session-decrement" className="DIbutton" onClick={handleDec}>-</button>
            <button id="session-increment" className="DIbutton" onClick={handleInc}>+</button>
        </div>
    )
}

export default Session
