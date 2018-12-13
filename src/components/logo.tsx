import React, { Fragment } from 'react'
import logoSvg from './logo.svg'
import './logo.css'

const Logo = () => (
  <Fragment>
    <img src={logoSvg} className="header__logo" alt="logo" />
  </Fragment>
)

export default Logo
