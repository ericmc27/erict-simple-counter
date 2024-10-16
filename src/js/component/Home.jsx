import React, { useRef, useState, useEffect } from "react";
import SecondsCounter from './SecondsCounter.jsx';
import BonusOptions from './BonusOptions.jsx';


const Home = () => {
  const [myCounter, setCounter] = useState(0);/*Initial timer*/
  const [timerIsActive, setTimerIsActive] = useState(true);
  let interval;
  const inputRef = useRef('');
  const formattedCounter = String(myCounter).padStart(6, '0');


    const inputtedTimer = (event)=>{ /*Sets new timer*/
      const inputNotEmpty = parseInt(inputRef.current.value);

      if (inputNotEmpty){
        setCounter(inputNotEmpty)
      }

      inputRef.current.value = '';
    }

    const stopTimer = (event)=>{
      setTimerIsActive(false);
    }

    const resetTimer = (event)=>{
      setCounter(0);
      setTimerIsActive(true);/*If user clicks on stop, resetTimer will reset the timer as well as resume the timer*/
    }

    const resumeTimer = (event)=>{
      setTimerIsActive(true);
    }

  useEffect(() => {
    if(timerIsActive){
      interval = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 1000);  
    }
    else if (!timerIsActive){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerIsActive]);

  let props = {formattedCounter, myCounter, inputRef, inputtedTimer, resetTimer, stopTimer, resumeTimer}

  return (
    <>
    <SecondsCounter seconds={props} />
    <BonusOptions function={props}/>
    </>
    
  );
}

export default Home;
