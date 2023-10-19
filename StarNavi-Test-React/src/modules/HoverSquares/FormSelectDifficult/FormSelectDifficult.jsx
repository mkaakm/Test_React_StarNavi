import { useState, useEffect } from 'react'
import axios from 'axios'
import useForm from '../../../shared/hooks/useForm'
import styles from './index.module.css'

const initialState = {
    name:'size',
}
const FormSelectDifficult = ({onSubmit})=>{
const [levelList, setLevelList] = useState([])
const [error, setError] = useState('')
const {setState, handleChange, handleSubmit} = useForm({initialState, onSubmit})
useEffect(()=>{
    const fetchLevelList = async ()=>{
        try{
            const {data} = await axios.get('https://60816d9073292b0017cdd833.mockapi.io/modes')
            setLevelList(data)
            setState(prevState =>({...prevState, size: data[0].field}))
            
        }
       catch(error){
        setError(error.message)
       }
    }
    fetchLevelList()
},[])
if(error){
    return <p>{error}</p>
}
const options = levelList.map(({name, field, id})=> <option value={field} key={id}>{name}</option>)
return(
    <form onSubmit={handleSubmit} className={styles.form}>
        <select className={styles.select} name='size' onChange={handleChange} >{options}</select>
        <button className={styles.btn}>Start</button>
    </form>
)
}
export default FormSelectDifficult