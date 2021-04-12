import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <StaticImage
              src="../images/diamonds.png"
              alt="diamonds-image"
              placeholder="blurred"
            />
          </div>
          <div className="main-text">max</div>
          <div className="main-image">
          <StaticImage
              src="../images/poppin-shades.png"
              alt="shades-image"
              placeholder="blurred"
            />
          </div>
          <div className="side-image right">
            <StaticImage
              src="../images/sexy-orange.png"
              alt="orange-image"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className="scroll">
            scroll for more
        </div>
        <div className="fixed-misc">
            ui designer and frontend developer
        </div>
      </div>
    </div>
  )
}

export default Banner
