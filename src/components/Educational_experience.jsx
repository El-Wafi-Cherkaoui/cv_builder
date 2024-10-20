import { useState } from "react"
import { jsx } from "react/jsx-runtime"

export default function Practical_experience({ed_ex_id = 0, ed_info_list, set_ed_info}){
    function change_school_name(new_name){
        new_p.name = new_name 
        update_info()
    }
    function change_title(new_title){
        new_p.title = new_title 
        update_info()
    }
    function change_date(new_date){
        new_p.date = new_date
        update_info()
    }
    function update_info(type) {
        console.log(new_p);
        
        set_ed_info(old=>{
            let old_info = [...old]
            typeof(old_info[ed_ex_id]) == 'undefined' ? old_info[ed_ex_id] = new_p :
            new_p.name != '' ? old_info[ed_ex_id].name = new_p.name : 0
            new_p.title != '' ? old_info[ed_ex_id].title = new_p.title : 0
            new_p.date != '' ? old_info[ed_ex_id].date = new_p.date : 0
            return old_info
        })       
    }

    const [new_t, setNew_t] = useState(false)

    let new_p = {
        ed_ex_id : ed_ex_id,
        name : '', 
        title : '',
        date : '' 
    }

    return(
            <>
                <input type="text" placeholder="school name" 
                    onChange={(e)=>change_school_name(e.target.value)}
                />
                <input type="text" placeholder="title of study" 
                    onChange={(e)=>change_title(e.target.value)} 
                />
                <input type="date" placeholder="date of study"
                    onChange={(e)=>change_date(e.target.value)}
                />
                <button onClick={(e)=>{setNew_t(true); e.target.disabled = true}}>
                    +
                </button>
                {new_t && <Practical_experience ed_ex_id={new_p.ed_ex_id+1} ed_info_list={ed_info_list} set_ed_info={set_ed_info}/>}
            </>
    )
}