import { Projects } from '../../../mock/data'

export default function handler(req, res) {
  res.status(200).json(Projects)
}
