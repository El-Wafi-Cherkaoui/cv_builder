export default function Data_inputs({personal_info}){
    return(
        <div className="cv_panel">
            <h1>{personal_info.first_name}</h1>
            <h1>{personal_info.last_name}</h1>
            <h1>{personal_info.email}</h1>
        </div>
    )
}