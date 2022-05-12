import React, { Component } from 'react'
import {FaDownload} from "react-icons/fa";
import axios from 'axios';

class Resume extends Component {
  downloadResume(){
    axios.get('/api/downloadResume',{responseType: 'blob'}).then( response => {
        const file = new Blob([response.data], {type: "application/pdf"});
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
        console.log('Resume opened');
    }).catch(error => {
        console.log('Resume Download Failed');
    })
  };

  render() {
    return (
      <>
        {/* <!-- START RESUME --> */}
        <section id="resume" className="tm-padding-top-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">					
                <h2 className="title">My <strong>Profile</strong></h2>
                <p><span className="tm-info-label">Name</span> Swagat Dash</p>
                <p><span className="tm-info-label">Birthday</span> August 16, 1995</p>
                <p><span className="tm-info-label">Address</span> South Circular Road, Dublin, Ireland</p>
                <p><span className="tm-info-label">Phone</span> +353 899844841</p>
                <p><span className="tm-info-label">Email</span> swagatdash95@gmail.com</p>
                <div className = "row" style = {{"marginTop":"15px"}}>
                    <button className = "btn" onClick = {this.downloadResume}><FaDownload />My Resume</button>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.6065734127314!2d-6.277653784170971!3d53.33239727997621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c18f4ee4fd1%3A0xcfd678b76ec16cee!2sClanbrassil%20Street%20Lower%2C%20Dublin%208%2C%20D08%20HC79!5e0!3m2!1sen!2sie!4v1644531605180!5m2!1sen!2sie" width="100%" height="350" style="border:0;" style ={{border:"5px solid black"}} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END RESUME --> */}
      </>
    )
  }
}

export default Resume
