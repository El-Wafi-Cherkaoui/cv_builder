export default function Personal_info({setP_info, setE_info, setP_experience, personal_info}){
    function change_f_name(first_name) {
        setP_info(
            {
                ...personal_info,
                first_name: first_name
            }
        )
        
    }
    function change_l_name(last_name) {
        setP_info(
            {
                ...personal_info,
                last_name: last_name
            }
        )
        
    }
    function change_email(new_email) {
        setP_info(
            {
                ...personal_info,
                email: new_email
            }
        )
        
    }
    return(
            <section className="personal_info">
                <legend>Personal Info :</legend>
                <input type="text" placeholder="first name" 
                    onChange={(e)=>change_f_name(e.target.value)}
                    value={personal_info.first_name} 
                />
                <input type="text" placeholder="last name" 
                    onChange={(e)=>change_l_name(e.target.value)} 
                    value={personal_info.last_name} 
                />
                <input type="text" placeholder="example@gmail.com"
                    onChange={(e)=>change_email(e.target.value)}
                    value={personal_info.email} 
                />
            </section>
    )
}