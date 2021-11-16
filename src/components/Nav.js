import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

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
      </ul>

      <ul>
        <li>
          <Link href='/profile'>Profile</Link>
        </li>
        <li>
          <Link href='/logout'>Logout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
