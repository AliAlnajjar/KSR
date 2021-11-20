import headerStyles from '../../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <span>Kvalitet </span> Sikkerhet System
      </h1>
    </div>
  )
}

export default Header
