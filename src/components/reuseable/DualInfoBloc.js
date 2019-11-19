import React from "react"
import Heading from "./heading"

export default function DualInfoBloc({ heading, imgSrc }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row justify">
          <div className="col-8 mx-auto">
            <p className="lead text-light mb-5 justify">
              Ut aute consectetur nostrud sint laboris est in ipsum amet dolore
              est nulla nisi ullamco. Eu consectetur deserunt cupidatat et
              aliquip magna occaecat aute dolor. Adipisicing aliqua nisi
              consectetur aliqua ex proident reprehenderit tempor dolor aliqua
              esse Lorem veniam eiusmod. Voluptate cillum excepteur non laborum
              laboris. Ullamco minim labore amet nisi deserunt laborum. Tempor
              mollit laborum non mollit qui sunt elit tempor sint sunt in magna
              cupidatat ullamco. Duis eu minim aliqua ex occaecat cupidatat
              laboris cillum cupidatat non ex elit ipsum. Qui voluptate deserunt
              duis sunt anim est nulla incididunt dolore. Consectetur pariatur
              officia non eiusmod.
            </p>
          </div>
          <div className="col-4 ">
            <div className="card bg-dark">
              <img src={imgSrc} className="card-img-top" alt="img" />
              <div className="card-body">
                <h5 className="title text-warning">Karan Soni</h5>
                <p className="card-text ">Application Developer </p>

                <a
                  href="#"
                  className="btn btn-primary mx-auto"
                  style={{ width: "100%" }}
                >
                  {heading}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
