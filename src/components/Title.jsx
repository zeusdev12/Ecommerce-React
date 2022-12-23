import React from 'react'

const Title = ({name,title}) => {
  return (
    <div className='row mx-0'>
        <div className="col-10 mx-auto my-2 text-center text-title">
            <h1 className="text-uppercase font-weight-bold">
                {name} <strong className='text-warning'>{title}</strong>
            </h1>
        </div>
    </div>
  )
}

export default Title