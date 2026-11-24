import './Contact.css'
import { useState } from 'react'

function Contact() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [list, setList] = useState([{id: "17467282", Name: "ahmed", Phone: 37626382},
        {id: "17467285", Name: "sara", Phone: 3762635678},
    ])

    const handleClick = ()=>{
        setList([...list, {id:Date.now(), Name: name, Phone: phone}])
        setName("")
        setPhone("")
    }
    const handleRemove = (index)=>{
        setList(list.filter((_, i) => i !== index))
    }
    return (
        <div className="container">
            <div id="contacts">
                <h1>Contacts List</h1>
                <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}} value={name}/>
                <input type="text" placeholder="Phone" onChange={(e) => {setPhone(e.target.value)}} value={phone}/>
                <button onClick={handleClick} className="contact">Add New Contact</button>
            </div>
            <div>
                <ul>
                    {list.map((value, index)=>{
                        return<li>
                            <div>
                                <p>id : # {value.id}</p>
                                <p>Name : {value.Name}</p>
                                <p>Phone : {value.Phone}</p>
                                <button className="remove" onClick={()=>{handleRemove(index)}}>Delete</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Contact
