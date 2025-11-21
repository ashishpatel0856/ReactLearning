import { useContext } from "react"
import { GlobalContext } from "../../contexts"

function ContextButtonComponent() {
  
  const {handleChangeThemeOnButtonClick,theme} =useContext(GlobalContext)
  return (
    <button className="border-2 rounded-sm bg-amber-200 p-1" 
    onClick={handleChangeThemeOnButtonClick}
    >change theme</button>
  )
}
export default ContextButtonComponent