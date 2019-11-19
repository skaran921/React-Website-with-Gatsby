import React from "react"
import Heading from "./heading"
import { Link } from "gatsby"
export default function InfoBloc({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div>
        <div className="row">
          <div className="col">
            <Heading className="text-center" title={heading} />
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Mollit amet non elit occaecat dolor pariatur Lorem officia sint
              sunt deserunt. Reprehenderit ex nostrud veniam excepteur occaecat
              cupidatat ullamco occaecat veniam ad ipsum. Adipisicing enim ex
              dolore enim esse cupidatat quis cillum et est occaecat ad quis
              deserunt. Labore ex magna culpa voluptate id do amet adipisicing
              deserunt elit reprehenderit. Incididunt et amet est irure nulla eu
              dolor velit magna. Cillum minim ullamco nostrud id. Incididunt ex
              et enim et sint eiusmod commodo ea tempor laboris exercitation
              aute.
            </p>
            <Link to="/about"></Link>
            <button className="btn btn-dark btn-lg">Check {heading}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
