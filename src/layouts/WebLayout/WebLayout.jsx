import React, { useState } from 'react'
import { Navbar, ScrollArrow } from '../../components'

const WebLayout = (props) => {
    const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
        <Navbar toggle={toggle} setToggle={setToggle}  />
        {props.children}
        <ScrollArrow />
    </React.Fragment>
  )
}

export default WebLayout