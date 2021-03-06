import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      <link href="http://fonts.cdnfonts.com/css/proxima-nova-2" rel="stylesheet"></link>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Kvalitet Sikkerhet System',
  keywords: '',
  description: '',
}

export default Meta
