import { useState, useEffect } from 'react'

const useFetchSlider = () => {
    const [carouselData, setCarouselData ] = useState([]);
    const [loading, setLoading]  = useState(false);
    const [error, setError ] = useState('');

    const fetchSlider= async ()=> {
        try {
          setLoading(true);
          await new Promise(resolve=>setTimeout(resolve,1000));
          const response = await fetch("http://localhost:3001/carousel");

          if(!response.ok) {
            throw new Error('Carousel fetch api failure');
          }

          const data = await response.json();
          setCarouselData(data);
          
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchSlider();
    },[])

    return {carouselData, loading, error}
}
export default useFetchSlider;