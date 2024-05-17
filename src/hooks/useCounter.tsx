import { useState } from "react"

interface options{
    initialValue?: number;
}
export const useCounter= ({initialValue = 0}:options) => {
   
   
    const [count, setCount]= useState<number>(initialValue);
   
   
    const increaseBy = (value: number) => {
        const newValue = count + value;
        if(newValue < 0) return;

        setCount(count + value);

    }
    
    
 
    return {
        count, 

        increaseBy,
    }
}

export default useCounter
