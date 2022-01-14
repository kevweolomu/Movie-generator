import React, {useState} from 'react';

export default function Input({onSubmit}) {
    const [title, setTitle] = useState();
    
    function handleChange(event){
        setTitle(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={title} placeholder="search-title" />
            <button onClick={()=>{onSubmit(title)}}>Submit</button>
        </div>
    )
}
