import './UserProfile.css'
import rupeshImage from './assets/Rupesh.jpg'
import { useState } from 'react'

const UserProfile = () => {

    const [skills, setSkills] = useState([
        {id: 1, skill: 'HTML'},
        {id: 2, skill: 'CSS'},
        {id: 3, skill: 'JS'},
        {id: 4, skill: 'React'},
        {id: 5, skill: 'Mongo DB'},
        {id: 6, skill: 'Next JS'},
        {id: 7, skill: 'Git'},
        {id: 8, skill: 'MySQL'},
        {id: 9, skill: 'Node'},
        {id: 10, skill: 'redis'},

    ]);


    return(
        <div className='user-container'>
            <div>
                <img src={rupeshImage} loading='lazy' className='user-image'/>
            </div>
            <div className='user-name'>
                Rupesh Kumar <div className='user-status'></div>
            </div>
            <p className='user-job'>Software Engineer, India</p>
            <h2>SKILLS</h2>
            <ul className='skill-container'>
                {skills.map(({skill, id}) => {
                    return(
                        <li key={id} className='skill-card'>{skill}</li>
                    )
                })}
            </ul>

        </div>
    )
}

export default UserProfile;