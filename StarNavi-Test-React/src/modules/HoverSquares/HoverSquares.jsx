import { useState, useCallback } from "react"
import FormSelectDifficult from "./FormSelectDifficult/FormSelectDifficult"
import HoverSquaresGame from "./HoverSquaresGame/HoverSquaresGame"
const HoverSquares = () =>{
    const [size, setSize] = useState(null)
    const selectSize = useCallback(({size})=> setSize(size), [])

return(
    <>
    <FormSelectDifficult onSubmit={selectSize}/>
    {size && <HoverSquaresGame size={size} />}
    </>
)
}
export default HoverSquares