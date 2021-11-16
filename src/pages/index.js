import { server } from '../config'
import ProjectList from '../components/ProjectList'

export default function home({ projects }) {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`)
  const projects = await res.json()

  return {
    props: {
      projects,
    },
  }
}