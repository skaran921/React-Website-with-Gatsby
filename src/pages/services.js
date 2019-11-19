import React from "react"

import Layout from "../components/layout"
import HeroSection from "../components/reuseable/HeroSection"
import InfoBloc from "../components/reuseable/infoBloc"
import { graphql } from "gatsby"
import DualInfoBloc from "../components/reuseable/DualInfoBloc"
import TempPhotoSection from "../components/reuseable/TempPhotoSection"
const ServicesPage = ({ data }) => (
  <Layout>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Service"
      subtitle="Lorem Labore labore minim dolor quis dolore nisi duis sunt non amet quis occaecat."
      heroClass="about-background"
    />
    <InfoBloc heading="Services" />
    <TempPhotoSection />
    <DualInfoBloc
      heading="Message From Developer"
      imgSrc="https://cdn.dribbble.com/users/668979/screenshots/6137086/back_to_work_2x.png"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default ServicesPage
