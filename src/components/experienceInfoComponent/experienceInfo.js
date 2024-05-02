import React from 'react';
import './styles.css';
import { minExperience } from '../../locales/locales';

const ExperienceInfo = ({minimumExperience,skills}) => {
    return (
    <div class="info-container">
        {skills && 
        <>
            <h3 style={{marginTop: 10}}>Skills</h3>
            {
                skills.length>0 && skills.map((skill,index) => (
                    <div class="language-container" key={index}>
                        <p class="lang-skill">{skill}</p>
                    </div>
                ))}
        </>
        }
        {minimumExperience && 
        <>
            <h3 style={{marginTop: 10}}>{minExperience}</h3>
            <h2 style={{ textAlign:'start'}}>{minimumExperience}</h2>
        </>
        }
     </div>)
}

export default ExperienceInfo;