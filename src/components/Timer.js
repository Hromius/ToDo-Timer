import React, { useState } from 'react';


export default function Timer() {
    let [time, setTime] = useState(0);
    let [min, setMin] = useState(0)
    let [sec, setSec] = useState(0)
    let [flag, setFlag] = useState(0)
    const [intervalId, setIntervalId] = useState(null)

    let timeCalculation = () =>{

        if(time % 60 === 0 && time!== 0 ){
            setMin( min+=1 )
            }

        if(time % 60 !== 0 && time!== 0){
            setSec(sec= time)  
        } 

        if(time === 60 ){
            setSec(time = 0)  
        }

    }
    

    let interval = () => {
        if (flag !== 0) {return}
        else {setFlag (1) }
        setIntervalId( setInterval(() => {
            setTime(time++)
            timeCalculation()
        }, 1000))
           
    }

    let stopInterval = () =>{
        setFlag (0)
        clearInterval(intervalId)
    }


return(
    <>
        <div className='timer'>
            <span>
                Min: {min} Sec: {sec}
            </span>
           
           <button 
        className="icon-play button-timer"
        onClick = {interval}
        />
        
        <button
        className='icon-pause button-timer'
        onClick = {stopInterval}
        />
        </div>
        
        
        
    </>
)

}