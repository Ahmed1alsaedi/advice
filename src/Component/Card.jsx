import {useState,useEffect} from "react";
import CardDetails from "../Component/CardDetails";    
function Card() {
     console.log("Card component is rendering!");
    const [advice, setAdvice] = useState("wqdsax");
    const [number, setLoading] = useState(123);

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice").
        then((res)=>res.json()).then((data)=>{
            setAdvice(data.slip.advice);
            setLoading(data.slip.id);
          
        })
},[])

   return(

     <CardDetails advice={advice} number={number}/>
   );
  
}

export default Card;