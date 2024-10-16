import React from 'react'

function BonusOptions(props) {
  return (
    <>
      <div className='d-flex flex-column align-items-center gap-2 mt-5'>
        <label>Countdown from given number</label>
        <input type='text' maxLength={6} ref={props.function.inputRef}></input>
        <button onClick={props.function.inputtedTimer}>Countdown</button>
        <button onClick={props.function.stopTimer}>Stop</button>
        <button onClick={props.function.resetTimer}>Reset</button>
        <button onClick={props.function.resumeTimer}>Resume</button>
      </div>
    </>
  );

};

export default BonusOptions;