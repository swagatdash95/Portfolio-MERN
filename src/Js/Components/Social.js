import React, { Component } from 'react'

class Social extends Component {
  render() {
    return (
      <>
        {/* <!-- START SOCIAL --> */}
        <section id="social" className="tm-social">
          <div className="container">
            <div className="row" style = {{height:'4rem'}}>
              <div className="col-md-3 col-sm-3 wow rotateInUpLeft" data-wow-delay="0.3s" style = {{"padding":"0"}}>
                <a href="https://www.linkedin.com/in/swagat-dash-465b5b129" target="_blank" style = {{height:'100%', width:'100%'}}>
                  <div className="linkedin" style = {{height:'100%', paddingTop:'1vh'}}>
                    <div className="media-object">
                      <i className="fa fa-linkedin"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-3 wow rotateInUpLeft" data-wow-delay="0.6s" style = {{"padding":"0"}}>
                <a href="https://github.com/swagatdash95" target="_blank" style = {{height:'100%', width:'100%'}}>
                  <div className=" github" style = {{height:'100%', paddingTop:'1vh'}}>
                    <div className="media-object">
                      <i className="fa fa-github"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-3 wow rotateInUpLeft" data-wow-delay="0.9s" style = {{"padding":"0"}}>
                <a href="https://instagram.com/swagatdash1?r=nametag" target="_blank" style = {{height:'100%', width:'100%'}}>
                  <div className=" instagram" style = {{height:'100%', paddingTop:'1vh'}}>
                    <div className="media-object">
                      <i className="fa fa-instagram"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-3 wow rotateInUpLeft" data-wow-delay="1.2s" style = {{"padding":"0"}}>
                <a href="https://www.facebook.com/swagat.dash.773" target="_blank" style = {{height:'100%', width:'100%'}}>
                  <div className=" facebook" style = {{height:'100%', paddingTop:'1vh'}}>
                    <div className="media-object">
                      <i className="fa fa-facebook"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END SOCIAL --> */}
      </>
    )
  }
}

export default Social
