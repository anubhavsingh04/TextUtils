import React from 'react'

function Alert(props) {

    const capitalize=(word)=>{
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

  return (
    <div style={{height:'30px'}} className='my-5'>
    {props.alert && <div className={`alert alert-primary alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert
