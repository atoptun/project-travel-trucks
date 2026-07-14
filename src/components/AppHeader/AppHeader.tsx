import { NavLink } from "react-router-dom"

function AppHeader() {
  return (
    <div>
      AppHeader
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/campers'>Campers</NavLink>
    </div>
  )
}
export default AppHeader
