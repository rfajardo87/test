import { useState } from "react";

function Form({list,filterList,setList}){
    const [newFilter,setNewFilter] = useState('');
    return (
    <form>
            <input type="text" onChange={e=>{
                setNewFilter(e.target.value);
            }}/>
            <button type="button" onClick={()=>{
                filterList(list,newFilter,setList);
            }}>Filter</button>
        </form>
    )
}

export default Form;