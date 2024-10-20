export default function Data_inputs({personal_info, ed_list}){
    console.log(ed_list);
    
    return(
        <>
            <div className="cv_panel">
                <h1>{personal_info.first_name}</h1>
                <h1>{personal_info.last_name}</h1>
                <h1>{personal_info.email}</h1>
                <h2>practical experience :</h2>
                <section className="educational_experience">
                    {ed_list.map((ed, k)=>{
                        return (
                            <>
                                <div key={k} className="ed_ex">
                                    <h3>{ed.name}</h3>
                                    <span>{ed.date}</span>
                                    <h5>{ed.title}</h5>
                                </div>
                            
                            </>
                        )
                    })} 
                </section>
            </div>
        </>
    )
}