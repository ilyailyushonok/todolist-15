import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { SyntheticEvent } from "react"
import { useAppDispatch, useAppSelector } from "@/common/hooks"
import { selectAppError, setAppErrorAC } from "@/app/app-slice.ts"

export  const ErrorSnackbar=()=> {
const  error=useAppSelector(selectAppError)
const dispatch=useAppDispatch()
  const handleClose = (_event?: SyntheticEvent | Event,  reason?: SnackbarCloseReason,) => {
    if (reason === 'clickaway') return
    dispatch(setAppErrorAC({error: null }))
  };

  return (
    <div>
      <Snackbar open={error!==null} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity="success" variant="filled" >
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}
