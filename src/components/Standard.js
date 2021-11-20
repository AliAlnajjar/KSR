import standardStyles from '../styles/Standard.module.scss'
import StandardListSyles from '../styles/StandardList.module.scss'

const Standard = ({standard}) => {
  return (
    <div className= {StandardListSyles.card}>
        <div className = {standardStyles.master}>
        {standard.name}
        </div> 

        <ul className = {standardStyles.details}>
            {standard.points.map((point) => 
                <li>
                    {point}
                </li>
            )}
        </ul>         
    </div>
  )
}

export default Standard
