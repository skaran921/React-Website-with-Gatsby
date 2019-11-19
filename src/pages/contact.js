import React from "react"

import Layout from "../components/layout"
import HeroSection from "../components/reuseable/HeroSection"
import InfoBloc from "../components/reuseable/infoBloc"
import { graphql } from "gatsby"
const ContactPage = ({ data }) => (
  <Layout>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Contact"
      subtitle="Lorem Labore labore minim dolor quis dolore nisi duis sunt non amet quis occaecat."
      heroClass="about-background"
    />

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.97413355575!2d75.04193991510344!3d29.546247582066353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114dab7ef1ce61%3A0x4a9b3ace71b1621e!2sChaudhary%20Devi%20Lal%20University!5e0!3m2!1sen!2sin!4v1574166603776!5m2!1sen!2sin"
      height="450"
      frameborder="0"
      style={{ border: 0, width: "100vw" }}
      allowfullscreen=""
    ></iframe>
    <InfoBloc heading="Contact" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default ContactPage
