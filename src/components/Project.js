import projectStyles from '../styles/Project.module.scss'
import TextButton from './TextButton'
import Image from 'next/image'
import { Grid  } from '@mui/material'

const Project = ({ project }) => {
  const imgUrl = project.image
  return (
      <Grid item xs={6}>
        <div className ={projectStyles.card}>
          <Grid container  spacing={1}>
            <Grid item xs={12}>
                <Grid container direction="column" spacing={0.5}>
                  <Grid item xs={12}>
                    <h3>{project.name}</h3>
                  </Grid>
                  <Grid item xs={12}>
                    <p>{project.description}</p>
                  </Grid>
                  <Grid item xs={12}>
                      <Grid container spacing={0}> 
                      </Grid>
                      <Grid item xs={12}>
                      </Grid>
                  </Grid>
                </Grid>
            </Grid>

            <Grid item xs={0}>
              {/* <Image  src ={imgUrl} width = {250} height = {250} layout ='responsive'></Image> */}
            </Grid>
          </Grid>
        </div>
      </Grid>

  )
}

export default Project
{/* <TextButton href={`/project/${project.id}`} lable = 'Control &#8594;'> </TextButton> */}