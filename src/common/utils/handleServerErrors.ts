import { setAppStatusAC, setErrorAC } from "@/app/app-slice.ts"
import type { Dispatch } from "@reduxjs/toolkit"
import { isAxiosError } from "axios"

export const handleServerErrors = (dispatch: Dispatch, error: unknown) => {
  if (isAxiosError(error)) {
    dispatch(setErrorAC({ error: error.response?.data?.message || error.message }))
  } else if (error instanceof Error) {
    dispatch(setErrorAC({ error: `Native error: ${error.message}` }))
  } else {
    dispatch(setErrorAC({ error: JSON.stringify(error) }))
  }

  dispatch(setAppStatusAC({ status: "failed" }))
}
