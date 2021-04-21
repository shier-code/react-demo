import React from 'react'
import querystring from "querystring"
const UCenter = (props) => {
  console.log('props==============', props)
  // const paramas=new URLSearchParams(props.location.search);
  // console.log(paramas.get("name"))
  const value = querystring.parse(props.location.search)
  console.log(value)

  return (
    <div>
      demo
    </div>
  )
}
export default UCenter