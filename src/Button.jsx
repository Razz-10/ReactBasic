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
    bgColor : "Yellow",
    textInsideButton:"Default"
}
Button.propTypes ={
    textInsideButton: PropTypes.string
}

export default Button