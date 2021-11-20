import Project from './Project'
import { Grid  } from '@mui/material'
const ProjectList = ({ projects }) => {
  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={9}>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </Grid>
  )
}

export default ProjectList
