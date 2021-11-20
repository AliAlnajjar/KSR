import Meta from '../components/Meta'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
const addProject = () => {
  return (
    <>
      <Meta title='add a new project' />
      <h1>Add a new project</h1>
      <Box 
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '50ch' },
        }}
      >
        <TextField
          fullWidth
          required
          id=""
          label="Project Name"
        />  
        <TextField
          fullWidth
          required
          id=""
          label="Project Number"
        />  
        <TextField
          fullWidth
          required
          id=""
          label="Project leader"
        />
        <TextField
          fullWidth
          required
          id=""
          label="Starting Date"
        /> 
        <TextField
          fullWidth
          required
          id=""
          label="entrepreneur"
        /> 
      </Box>
      
    </>
  )
}

export default addProject