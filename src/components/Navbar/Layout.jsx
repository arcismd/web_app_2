import React from 'react'
import { Navbar } from './Navbar'

import ScrollToTop from '../ScrollToTop/ScrollToTop'

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <div>
            <Navbar />
            {children}
        </div>
        <ScrollToTop />
    </React.Fragment>
  )
}
