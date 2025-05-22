import { useDispatch, useSelector } from "react-redux"
import "./general.css"
import { actionTimer } from "./reducers"

function Brake() {
    const dispatch = useDispatch()
    const breakNumber = useSelector((state) => state.timer.breakNumber)

    function incNumber() {
        if (breakNumber < 60) {
            dispatch(actionTimer.incBreak())
        }
    }

    function decNumber() {
        if (breakNumber > 1) {
            dispatch(actionTimer.decBreak())
        } else if (breakNumber < 1) {
            dispatch(actionTimer.incBreak())
        }
    }

    return (
        <div className="brake">
            <label id="break-label">Break Length</label><br />
            <label id="break-length">{breakNumber}</label><br />
            <button id="break-decrement" className="DIbutton" onClick={decNumber}>-</button>
            <button id="break-increment" className="DIbutton" onClick={incNumber}>+</button>

        </div>
    )
}

export default Brake