import  {useState} from "react";

export function UseLocalStorage (key, initialValue){
    const [storeVakue, setStoreValue]= useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            return initialValue;
        }




    });

    const setValue = value =>{
        try{
            setStoreValue(value);
            window.localStorage.setItem(key. JSON.stringify(value));

        }catch (error){
            console.error(error);
        }

    }

}