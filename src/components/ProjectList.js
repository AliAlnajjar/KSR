import Project from './Project'
import projectStyles from '../styles/Project.module.css'

const ProjectList = ({ projects }) => {
  return (
    <div className={projectStyles.grid}>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  )
}

export default ProjectList
