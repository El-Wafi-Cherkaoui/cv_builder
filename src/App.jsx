import { useState } from 'react'
import './styles/styles.css'
import Personal_info from './components/Personal_info'
import Data_output from './components/Data_output'
import Practical_experience from './components/Educational_experience'

function App() {
  const [count, setCount] = useState(0)
  // let data = {
    
  //   school_name : 'CMC', 
  //   title_study : 'DEV',
  //   date_study : '2024',
  //   company_name : 'LA digital',
  //   position_title : 'Back-end developer',
  //   main_responsibilities : ['maintenance', 'clean up'],
  //   from : '12/01/2024',
  //   to : '13/01/2024'
  // }
  const [personal_info, setPersonal_info] = useState({
    first_name : 'el wafi', 
    last_name : 'cherkaoui', 
    email : 'elwafi@gmail.com',
    phone : '0745124511'
  })
  const [educational_info, setEducational_info] = useState([])
  const [practical_experience, setPractical_experience] = useState([])

  return (
    <div className='container'>

      <div className='input_panel'>
        <Personal_info setP_info = {setPersonal_info} 
          setE_info = {setEducational_info} 
          setP_experience = {setPractical_experience}
          personal_info = {personal_info} />

        <section className="practical_experience" >
        <legend>practical experience :</legend>
          <Practical_experience ed_info_list = {educational_info} set_ed_info = {setEducational_info} />
        </section>

      </div>


      <Data_output personal_info = {personal_info} ed_list = {educational_info}/>
    </div>
  )
}

export default App
