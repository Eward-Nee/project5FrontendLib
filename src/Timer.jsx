import { useEffect, useState, useRef } from "react"
import "./general.css"
import { useDispatch, useSelector } from "react-redux"
import { actionTimer } from "./reducers"

function Timer() {
    const [isRunning, setIsRunning] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const breakNumber = useSelector((state) => state.timer.breakNumber)
    const sessionNumber = useSelector((state) => state.timer.sessionNumber)
    const isSession = useSelector((state) => state.timer.isSession)
    const dispatch = useDispatch()
    const audioRef = useRef(null)

    function startTimer() {
        setIsRunning(true)
    }

    useEffect(() => {
        setSeconds(isSession ? sessionNumber * 60 : breakNumber * 60)
    }, [sessionNumber, isSession, breakNumber])

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                if (seconds == 0) {
                    dispatch(actionTimer.changeifSession())
                } else {

                    if (seconds == 1) {
                        audioRef.current.play()
                    }
                    setSeconds(prev => prev - 1)
                }
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        };
    }, [isRunning, seconds])


    function stopTimer() {
        setIsRunning(false)
    }

    function reset() {
        dispatch(actionTimer.resetAll())
        setSeconds(25 * 60)
        setIsRunning(false)
        audioRef.current.pause()
        audioRef.current.currentTime = 0
    }

    function format() {

        return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`
    }

    return (
        <div className="timer">
            {isSession == true ? <h3 id="timer-label" className="init">Session</h3> : <h3 id="timer-label" className="uninit">Break</h3>}
            <p id="time-left">{format()}</p>
            {isRunning == false ? <button id="start_stop" onClick={startTimer}>Start</button> : <button id="start_stop" onClick={stopTimer}>Stop</button>}<br />
            <button id="reset" onClick={reset}>Reset all</button>
            <audio src="./src/sound.wav" ref={audioRef} id="beep"></audio>

        </div>
    )
}

export default Timer

