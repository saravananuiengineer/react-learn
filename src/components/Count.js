import {useState,useEffect} from 'react'
const Count = ()=> {

    const [time,setTime]=useState(0);
    const [pause,setPause]=useState(false);

    useEffect(()=>{
        let timer;

        if (pause) {
            timer = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }

        return ()=> clearInterval(timer);

    }, [pause])

    let resetTimer =()=>{
        setTime(0)
        setPause(0)
    }
    
    let formatTimer = (seconds)=> {
        let sec = (seconds % 60).toString().padStart(2,"0");
        let mint = Math.floor(sec/60).toString().padStart(2,"0"); 
        let hrs = Math.floor(mint/60).toString().padStart(2,"0"); 
        return(
             <div className="w-full text-center mb-4">
                {hrs}:{mint}:{sec}
            </div>
        )
    }
    return(
        <div className="grid h-500px; mx-auto mt-36 w-[50%] place-content-center">
            {formatTimer(time)}
            <div className="w-full">
                <button onClick={()=>setPause(true)} type="button" className="rounded-lg bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700 mr-3">
                    Start
                </button>
                <button type="button" className="rounded-lg bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700 mr-3" onClick={()=>setPause(false)}>
                    Paush
                </button>
                <button type="button" className="rounded-lg bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700" onClick={resetTimer}>
                    Restart
                </button>
            </div>
        </div>
    )
}

export default Count