import { useState } from "react"
import Cards from "./Cards"

export default function Product() {

const[value,setValue]=useState("")

    return (
        <>
            <div>
                <input type="text" value={value}
                    onChange={(e) => setValue(e.target.value)} />
                
                <Cards/>
            </div> 
        </>
    )
}