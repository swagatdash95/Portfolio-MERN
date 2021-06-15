import React, { Component } from 'react';
import { useFormik } from "formik";
import axios from 'axios';

const validate = values => {
    const errorMsgRequired = "Must be 20 characters or less";
    const errorEmail = "Please enter a valid E-mail ID";
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 20) {
      errors.name = errorMsgRequired;
    }
  
    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.search('@') >= values.email.lastIndexOf('.')) {
      errors.email = errorEmail;
    }
  
    return errors;
  };

const Connect = (props) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""

        },
        validate,
        onSubmit: (values,{resetForm,setSubmitting,initialValues}) => {
          axios.post('/api/submit', values)
            .then(response => {
                console.log(response);
                alert('Your Response Submitted. Thanks!!');
                resetForm(initialValues);
            });
            setSubmitting(false);
        }
      });
    return(
        <div className="slide">
            <div className="content fifth-content">
                <div className="container-fluid">
                    <div className = "row" style = {{"paddingLeft":"24px"}}>
                        <div className = "col-md-4 col-xs-4"><a href = "http://linkedin.com/in/swagat-dash-465b5b129"  target="_blank" ><i className="fab fa-linkedin social-tag" style = {{"fontSize": "4.73em","float":"left","marginLeft":"10px","color":"#fff"}}></i></a></div>
                        <div className = "col-md-4 col-xs-4"><a href= "https://instagram.com/swagatdash1?r=nametag"  target="_blank" ><i className="fab fa-instagram social-tag" style = {{"fontSize": "4.73em", "position":"relative","left": "-6%","color":"#fff"}}></i></a></div>
                        <div className = "col-md-4 col-xs-4"><a href = "https://www.facebook.com/swagat.dash.773"  target="_blank" ><i className="fab fa-facebook-square social-tag" style = {{"fontSize": "4.73em","float":"right","marginRight":"33px","color":"#fff"}}></i></a></div>
                    </div>
                    <div className = "row">
                        <div className="col-md-6">
                            <div id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.888627885406!2d84.0357592142601!3d22.09206988543219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20ecf2cd27244f%3A0xd22ddfe683861716!2sSundargarh%2C%20Odisha%20770001!5e0!3m2!1sen!2sin!4v1621351340841!5m2!1sen!2sin" title = "Location" width="400" height="430" style ={{border:"3px solid white"}} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form id="contact" action="" method="post" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                    <fieldset>
                                        <input id = "name" name="name" type="text" className="form-control" id="name" placeholder="Your name..." required="" onChange={formik.handleChange} value={formik.values.name}/>
                                        {formik.errors.name ? <div className = "error">{formik.errors.name} <br /></div> : null}
                                    </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                    <fieldset>
                                        <input id = "email" name="email" type="email" className="form-control" id="email" placeholder="Your email..." required="" onChange={formik.handleChange} value={formik.values.email}/>
                                        {formik.errors.email ? <div className = "error">{formik.errors.email} <br /></div> : null}
                                    </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                    <fieldset>
                                        <input id = "subject" name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required="" onChange={formik.handleChange} value={formik.values.subject} />
                                        {formik.errors.subject ? <div className = "error">{formik.errors.subject} <br /></div> : null}
                                    </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                    <fieldset>
                                        <textarea id = "message" name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required="" onChange={formik.handleChange} value={formik.values.message}></textarea>
                                    </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="btn">Send Now</button>
                                    </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Connect;