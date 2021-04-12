import * as React from "react"
import { Link } from "gatsby"

import Header from '../components/header'
import Banner from '../components/banner'
import AboutBlurb from '../components/aboutBlurb'


import '../styles/styles.scss'
const IndexPage = () => (
  <>
    <Header />
    <Banner />
    <AboutBlurb />
  </>
)

export default IndexPage
