import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3 className="slogan">The ability to create</h3>
            <p className="main-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              iste nostrum reiciendis delectus aliquid impedit laborum vero quae
              corrupti illum accusantium suscipit cupiditate vitae, sed
              praesentium tenetur consequuntur magnam asperiores sint doloribus
              eum soluta nisi? Voluptate, eum ducimus exercitationem odit
              molestias dicta aliquam accusamus eligendi rem aperiam vel ex
              consequuntur.Debitis, aperiam? Magnam repudiandae perspiciatis
              unde officia sed error quidem ad alias, aperiam impedit natus sit
              labore similique. Pariatur iste neque libero cupiditate, ea
              reprehenderit saepe quia obcaecati ipsum vel sed aspernatur porro
              laborum dolores quibusdam, quod est doloremque fugiat ratione unde
              reiciendis. Doloribus necessitatibus eum soluta fuga, dolores
              maxime.
            </p>
            <Link to="/work">view series</Link>
          </div>
          <div className="images">
            <div className="top-right">
              <StaticImage
                src="../images/fist.png"
                alt="picture of a fist"
                placeholder="blurred"
              />
            </div>
            <div className="bottom-left">
              <StaticImage
                src="../images/flower-mouth.png"
                alt="a girl with flower in mouth"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box maroon"></div>
    </div>
  )
}

export default AboutBlurb
