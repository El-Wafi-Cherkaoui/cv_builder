export default function Data_inputs({personal_info, ed_list, p_list}){
    console.log(ed_list);
    
    return(
        <>
            <div className="cv_panel">
                <div className="header">
                    <h1>{personal_info.first_name} {personal_info.last_name}</h1>
                    <h3>{personal_info.email}</h3>
                </div>
                <h2>educational experience :</h2>
                <section className="educational_experience">
                    {ed_list.map((ed, k)=>{
                        return (
                            <>
                                <div key={k} className="ed_ex">
                                    <h3>{ed.name}</h3>
                                    <span>({ed.date})</span>
                                    <h5>Title : {ed.title}</h5>
                                </div>
                            
                            </>
                        )
                    })} 
                </section>
                <h2>practical experience :</h2>
                <section className="practical_experience">
                    {p_list.map((ed, k)=>{
                        return (
                            <>
                                <div key={k} className="p_ex">
                                    <h3>{ed.name}</h3>
                                    <span>{ed.position_title}</span>
                                    <h5>{ed.responsibilities}</h5>
                                    <span>From: {ed.start_date}</span>
                                    <span>To: {ed.end_date}</span>
                                </div>
                            
                            </>
                        )
                    })} 
                </section>
            </div>
        </>
    )
}