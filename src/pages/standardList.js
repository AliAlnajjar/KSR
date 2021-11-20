import Meta from '../components/Meta'
import useStandards from '../hooks/useStandards'
import Spinner from '../components/Spinner'
import Standard from '../components/Standard'
import StandardListSyles from '../styles/StandardList.module.scss'

const standardList = () => {
  const  { response, error, loading } =useStandards()
  return (
    <>
      <Meta title='Standards'/>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {error && error.message}
          {response && 
            <div className = {StandardListSyles.grid}>
              {response?.map((std) => <Standard standard= {std}></Standard>)}
            </div>
          }
        </div>
      )}
    </>
  )
}


export default standardList
