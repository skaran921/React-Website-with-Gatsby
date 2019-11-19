import React from "react"

export default function TempServiceSection() {
  return (
    <div className="">
      <div className="card-group">
        <div className="card ml-4">
          <img
            src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="img"
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="title text-warning">Sam</h5>
            <p className="card-text ">Flutter Developer </p>
            <p className="card-text ">Last updated 3 min ago </p>
          </div>
        </div>
        <div className="card ml-4">
          <img
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="img"
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="title text-warning">Tina</h5>
            <p className="card-text ">Application Developer </p>
            <p className="card-text ">Last updated 3 min ago </p>
          </div>
        </div>
        <div className="card ml-4 mr-4">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="img"
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="title text-warning">Richard</h5>
            <p className="card-text ">Angular Developer </p>
            <p className="card-text ">Last updated 3 min ago </p>
          </div>
        </div>
        <div className="card ml-4 mr-4">
          <img
            src="https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top"
            alt="img"
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="title text-warning">Sandy</h5>
            <p className="card-text ">React Developer </p>
            <p className="card-text ">Last updated 3 min ago </p>
          </div>
        </div>
      </div>
    </div>
  )
}
