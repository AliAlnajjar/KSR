import { Standards } from '../../../mock/standards'

export default function handler(req, res) {
  res.status(200).json(Standards)
}
