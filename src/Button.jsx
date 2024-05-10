import React from 'react'
import PropTypes from'prop-types'

const Button = (props) => {
  return (
    <div>
        <button style={{backgroundColor :`${props.bgColor}`}}>{props.textInsideButton}</button>
        </div>
  )
}
Button.defaultProps ={
    bgColor : "red",
    textInsideButton:"Default"
}
Button.propTypes ={
    textInsideButton: PropTypes.string
}

export default Button
// const RajTuladhar=()=>{
//   return(
//     <>
//     <div><h1>k cha laudu</h1></div>
//     </>


//   )
// }
// export default RajTuladhar;