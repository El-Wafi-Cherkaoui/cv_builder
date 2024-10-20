import { useState } from "react"
import { jsx } from "react/jsx-runtime"

export default function Practical_experience({pex_id = 0, pex_info_list, set_p_ex}){
    function change_company_name(new_name){
        new_c.name = new_name 
        update_info()
    }
    function change_position_title(new_title){
        new_c.position_title = new_title 
        update_info()
    }
    function change_responsibilities(new_respo){
        new_c.responsibilities = new_respo 
        update_info()
    }
    function change_start_date(new_date){
        new_c.start_date = new_date
        update_info()
    }
    function change_end_date(new_date){
        new_c.end_date = new_date
        update_info()
    }
    function update_info(type) {
        
        set_p_ex(old=>{
            let old_info = [...old]
            typeof(old_info[pex_id]) == 'undefined' ? old_info[pex_id] = new_c :
            new_c.name != '' ? old_info[pex_id].name = new_c.name : 0
            new_c.position_title != '' 
            ? old_info[pex_id].position_title = new_c.position_title : 0
            new_c.responsibilities != '' 
            ? old_info[pex_id].responsibilities = new_c.responsibilities : 0
            new_c.start_date != '' 
            ? old_info[pex_id].start_date = new_c.start_date : 0
            new_c.end_date != '' 
            ? old_info[pex_id].end_date = new_c.end_date : 0
            return old_info
        })       
    }

    const [new_t, setNew_t] = useState(false)

    let new_c = {
        pex_id : pex_id,
        name : '', 
        position_title : '',
        responsibilities : '',
        start_date : '',
        end_date : ''
    }

    return(
            <>
                <input type="text" placeholder="school name" 
                    onChange={(e)=>change_company_name(e.target.value)}
                />
                <input type="text" placeholder="title of study" 
                    onChange={(e)=>change_position_title(e.target.value)} 
                />
                <input type="text" placeholder="responsibilities" 
                    onChange={(e)=>change_responsibilities(e.target.value)} 
                />start
                <input type="date" placeholder="start date"
                    onChange={(e)=>change_start_date(e.target.value)}
                />end
                <input type="date" placeholder="end date"
                    onChange={(e)=>change_end_date(e.target.value)}
                />
                <button onClick={(e)=>{setNew_t(true); e.target.disabled = true}}>
                    +
                </button>
                {new_t && <Practical_experience pex_id={pex_id+1} pex_info_list={pex_info_list} set_p_ex={set_p_ex}/>}
            </>
    )
}