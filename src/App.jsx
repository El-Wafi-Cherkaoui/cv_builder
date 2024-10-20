import { useState } from 'react'
import './styles/styles.css'
import Personal_info from './components/Personal_info'
import Data_output from './components/Data_output'
import Educational_experience from './components/Educational_experience'
import Practical_experience from './components/Practical_experience'

function App() {
  const [personal_info, setPersonal_info] = useState({
    first_name : '', 
    last_name : '', 
    email : '',
    phone : ''
  })
  const [educational_info, setEducational_info] = useState([])
  const [practical_info, setPractical_experience] = useState([])

  return (
    <div className='container'>

      <div className='input_panel'>
        <Personal_info setP_info = {setPersonal_info} 
          setE_info = {setEducational_info} 
          setP_experience = {setPractical_experience}
          personal_info = {personal_info} />

        <section className="practical_experience" >
        <legend>educational experience :</legend>
          <Educational_experience ed_info_list = {educational_info} set_ed_info = {setEducational_info} />
        </section>

        <section className="practical_experience" >
        <legend>practical experience :</legend>
          <Practical_experience pex_info_list = {practical_info} set_p_ex = {setPractical_experience} />
        </section>


      </div>


      <Data_output personal_info = {personal_info} ed_list = {educational_info} p_list = {practical_info}/>
    </div>
  )
}

export default App
