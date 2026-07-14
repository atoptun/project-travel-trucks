import { fetchCampers } from "@/redux/campers/operations"
import { selectCampers } from "@/redux/campers/selectors"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

function CampersPage() {
  const dispatch = useAppDispatch()
  const campers = useAppSelector(selectCampers)

  console.info(campers);
  
  useEffect(() => {
    dispatch(fetchCampers())
  
  }, [dispatch])

  return (
    <div>CampersPage</div>
  )
}
export default CampersPage
