 import {useState,useEffect} from 'react';
 import useFetchSlider from '../../utils/useFetchSlider'
const Carousel = () => {
    const [index, setIndex]=useState(0)
    const loadElm =<p>Loading...</p>
    const { carouselData, loading, error} = useFetchSlider();
    const next = (index) => {
        index = index+1;
        if(carouselData.length<=index){
            setIndex(0)
        }else{
            setIndex(index)
        }
    }
    const prev = (prev) => {
        if(prev==0){
            setIndex(carouselData.length-1)
        }else{
            setIndex(index=>index-1)
        }
    }
    useEffect(()=>{
        let runSlider;

        if(carouselData.length!=0) {
            runSlider = setTimeout(()=>{
                next(index);
            },4000);
        }

        return ()=> clearTimeout(runSlider);

    },[carouselData,index]);
    
    const { name, image, locality } = carouselData[index] || "";
    if(loading===true) return <p>Loading...</p>
    return(
        
        (carouselData.length!=0) && <>
            <div className="relative h-80 md:h-[360px] overflow-hidden">
                <img src={image?.url} alt={name} className="w-full h-full object-cover brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    {/* <div className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-sm font-semibold shadow-lg">
                        {online ? 'Online' : 'Offline'}
                    </div> */}
                    <h2 className="mt-4 text-4xl font-bold tracking-tight drop-shadow-lg">{name}</h2>
                    <p className="mt-2 text-sm text-slate-200">{locality.name}</p>
                </div>
            </div>
            <button onClick={()=>prev(index)}>Prev</button>
            <button onClick={()=>next(index)}>Next</button>
        </>
    )
}

export default Carousel; 