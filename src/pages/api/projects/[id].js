import { Projects } from '../../../mock/data'

export default function handler({ query: { id } }, res) {
  const filtered = Projects.filter((project) => project.id === id)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Project with the id of ${id} is not found` })
  }
}
