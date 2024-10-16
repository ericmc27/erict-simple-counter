import React from 'react';
import '../../styles/secondscounter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


function SecondsCounter(props) {
  return (
    <>
      <div className="bg-dark mx-auto mt-3 box">
        <h1 className="h1-icon text-light border border-light border-opacity-10 rounded"><FontAwesomeIcon icon={faClock} rotation={270} size="sm" style={{ color: "#ffffff", }} className="icon rounded" /></h1>
        <h1 className="text-light border border-light border-opacity-10 rounded">{props.seconds.formattedCounter[0]}</h1>
        <h1 className="text-light border border-light border-opacity-10 rounded">{props.seconds.formattedCounter[1]}</h1>
        <h1 className="text-light border border-light border-opacity-10 rounded">{props.seconds.formattedCounter[2]}</h1>
        <h1 className="text-light border border-light border-opacity-10 rounded">{props.seconds.formattedCounter[3]}</h1>
        <h1 className="text-light border border-light border-opacity-10 rounded">{props.seconds.formattedCounter[4]}</h1>
        <h1 className="text-light border border-light border-opacity-10 rounded">{props.seconds.formattedCounter[5]}</h1>
      </div>
    </>
  );

}

export default SecondsCounter;