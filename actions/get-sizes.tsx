import { Size } from "@/types"

const URl=`${process.env.NEXT_PUBLIC_API_URL}/sizes`


const getSizes=async ():Promise<Size[]>=>{
    const res=await fetch(URl,{cache: 'no-store'})
    return res.json()
}

export default getSizes