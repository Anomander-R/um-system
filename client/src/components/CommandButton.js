import React from 'react'

const CommandButton = ({name="fa fa-plus"}) => {
  return (
    <button className="btn"><i className={name}></i></button>
  )
}

export default CommandButton