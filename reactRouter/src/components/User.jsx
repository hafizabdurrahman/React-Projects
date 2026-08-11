import React from 'react'
import { useParams } from 'react-router'
function User() {
    const obj = useParams()
  return (
    <div>User: {obj.userid}</div>
  )
}

export default User