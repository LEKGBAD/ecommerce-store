"use client"

import {useState,useEffect} from "react"
import PreviewModal from "@/components/preview-modal";


const ModalProvider = () => {
    const [mounted,setIsMounted]=useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!mounted){
        return null
    }
    
    return ( 
        <>
            <PreviewModal />
        </>
     );
}
 
export default ModalProvider;