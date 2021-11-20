import Nav from './Nav'
import Meta from '../Meta'
import Header from './Header'
import Footer from './Footer'
import styles from '../../styles/Layout.module.scss'


import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main:'#fc5d2b',
    },
    secondary: {
      main: '#faf8f5',
    },
  },
});

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}> {/*  mui.com them provider  https://mui.com/customization/palette/  */}
        <Nav />
          <main className={styles.main}>
            {children}
          </main>
      </ThemeProvider>
    </>
  )
}

export default Layout
