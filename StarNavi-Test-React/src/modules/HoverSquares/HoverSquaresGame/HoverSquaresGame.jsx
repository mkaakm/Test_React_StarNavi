import { useState, useEffect, useCallback } from 'react'
import styles from './index.module.css'

const HoverSquaresGame = ({size})=>{
    const [hoverSquareList, setHoverSquareList] = useState([])
    useEffect(()=>setHoverSquareList([]),[size])
    const handleHover = useCallback((index) =>{
        setHoverSquareList(prevState => {
            if(!prevState.includes(index)){
                return [...prevState, index] 
            }
            return prevState.filter(item => item !== index)
        })
    }, [])
    const squareElements = new Array(size*size)
    .fill(0)
    .map((_, index)=> <div key={index} className={`${styles.square} ${hoverSquareList.includes(index) ? styles.selected : ''}`} onMouseEnter={()=>handleHover(index)}></div>)
    const selectSquares = hoverSquareList.map((item,index)=> <li className={styles.li} key={index}>{`row ${parseInt(item / size) + 1} col ${item % size + 1}`}</li>)
    return(
        <div className={styles.game}>
            <div className={styles.squareList} style={{gridTemplateColumns: `repeat(${size}, 30px)`, gridTemplateRows: `repeat(${size}, 30px)`}}>
            {squareElements}
            </div>
            <div>
            <h4 className={styles.title}>Hover Squares</h4> 
            <ul>
                {selectSquares}
            </ul>
            </div>
        </div>
    )
}
export default HoverSquaresGame