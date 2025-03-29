import { useEffect } from "react"

const ScrollComponent=(value)=>{
    useEffect(()=>{
        window.scrollTo(100,0)
    },[value])
    return(
        <>
        
        </>
    )
}

export default ScrollComponent