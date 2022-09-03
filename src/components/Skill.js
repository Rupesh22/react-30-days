import './Skill.css'

const Skill = () => {


    return(
        <div className='skill-bar-container'>
            <h1 className='skill-bar-heading'>World Population</h1>
            <h5 className='skill-bar-sub-heading'>Ten most populated countries</h5>
            <ul className='skill-bar-wrapper'>
                {tenHighestPopulation.map(({country, population}, index) => {
                    const populationInBillion = (population/100000000).toFixed(2);
                    const barFill = {
                        width: `${populationInBillion}%`,
                        backgroundColor:'orange',
                        height:'inherit',
                        borderRadius: '3px'
                    }
                    return(
                        <li key={index} className='skill-bar'>
                            <div className='skill-bar-name'>{country} </div>
                            <div className='skill-bar-graph-container'>
                                <div style={barFill}></div>
                            </div>
                            <div className='skill-bar-value'> {(population/1000000000).toFixed(2)} B</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
]

export default Skill;