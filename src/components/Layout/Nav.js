import Link from 'next/link'
import navStyles from '../../styles/Nav.module.scss'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      
      <ul>

        <li>
          <Link href='/'>Projects</Link>
        </li>
        <li>
          <Link href='/addProject'>Add project</Link>
        </li>
        <li>
          <Link href='/control'>Control</Link>
        </li>
        <li>
          <Link href='/standardList'>Standards</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href='/profile'>Profile</Link>
        </li>
        <li>
          <Link href='/login'>Logout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
