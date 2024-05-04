import React from "react"
import { closeIcon } from "../../assets/closeIcon"

interface ResMenuProps{
    funcName: ()=>void;
    isOpen:boolean;
}

const ResMenu:React.FC<ResMenuProps> = ({funcName, isOpen}) => {
  return (
    <>
        {isOpen && <div className='resMenu_backdrop' onClick={funcName}/>}
        <div className={isOpen ? "ResMenu active" : "ResMenu"}>  
            <span className="close_icon_res" onClick={funcName}>{closeIcon}</span>
        </div>
    </>
    
  )
}

export default ResMenu