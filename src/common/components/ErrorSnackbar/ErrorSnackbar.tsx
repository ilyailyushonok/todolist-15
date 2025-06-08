import { selectError, setErrorAC } from "@/app/app-slice.ts"
import { useAppDispatch, useAppSelector } from "@/common/hooks"
import Alert from "@mui/material/Alert"
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar"

export const ErrorSnackbar = () => {
  const error = useAppSelector(selectError)

  const dispatch = useAppDispatch()

  const handleClose = (_: any, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") return
    dispatch(setErrorAC({ error: null }))
  }

  return (
    <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" variant="filled">
        {error}
      </Alert>
    </Snackbar>
  )
}
