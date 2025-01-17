import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppstoreDispatch, AppStore } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppstoreDispatch>()  // call & save 
export const useAppSelector = useSelector.withTypes<RootState>()    // use / fetch values from the store
export const useAppStore = useStore.withTypes<AppStore>()
