import React from "react"

import Layout from "../components/layout"
import HeroSection from "../components/reuseable/HeroSection"
import InfoBloc from "../components/reuseable/infoBloc"
import { graphql } from "gatsby"
import DualInfoBloc from "../components/reuseable/DualInfoBloc"
const IndexPage = ({ data }) => (
  <Layout>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="i write code"
      subtitle="skaran921"
      heroClass="hero-background"
    />
    <InfoBloc heading="About Us" />
    <InfoBloc heading="Offers" />
    <DualInfoBloc
      heading="Our Team"
      imgSrc="https://cdn.dribbble.com/users/668979/screenshots/6137086/back_to_work_2x.png"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
