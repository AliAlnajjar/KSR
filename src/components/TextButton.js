import Button from '@mui/material/Button';
import Link from 'next/link'

const TextButton = ({lable,size,href}) => {
  return (
    <Link href= {href} >
    <Button variant ='text' size= {size}>{lable}</Button>
    </Link>
  )
}

export default TextButton

TextButton.defaultProps = {
    size: "larg",
    href:'#'
  }