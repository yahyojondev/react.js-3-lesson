import React,{useState} from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";


function Hero() {
  let [toggle,stateToggle] = useState(false)
  console.log(toggle);

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [data,setData]= useState([])

    const handleSubmit = (event)=>{
       event.preventDefault()
       if(!name.trim()){
        alert("Name esdan chiqdi")
       }
       let username = {
        id:`user-${new Date().getTime()}`,
        name,
        age}
      setData(p => [...p,username])
      setName("")
      setAge("")
    }

    const handleDelete = (id)=>{
       let filteredData = data?.filter(user => user.id != id)
       setData(filteredData)
    }

    let cards = data?.map((user)=> 
            <div className='data__wrapper' key={user.id}>
                <h4>{user.name}</h4>
                <button className='data__btn' onClick={()=>handleDelete(user.id)}><RiDeleteBin6Line /></button>
            </div>
    )
  return (
    <div>
                <button className='sidebar__btn' onClick={()=> stateToggle(p => !p)}>Daily plans "Click"</button>
                 <div className={`sidebar ${toggle ? "show" : ""}`}>
                 <div className="container">
        <div className="hero__wrapper">
            <form className='hero__form' onSubmit={handleSubmit} action="">
            <input required value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='please write' />
            <button className='hero__btn'>Add</button>
        </form>
         <div className="cards__wrapper">
             {cards}
         </div>
          {
        data.length ===0 ? <div className='hero__empty'><GiArchiveResearch /><span className="empty__text">Discipline</span></div> : <></>
       }
        </div>
        </div>
                 </div>
      
    </div>
  )
}

export default Hero