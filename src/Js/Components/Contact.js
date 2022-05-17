import React, { Component } from 'react'
import { useFormik } from "formik";
import axios from 'axios';

const validate = values =>
{
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

function Contact(props){
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

    return (
      <>
        {/* <!-- START CONTACT --> */}
        <section id="contact" className="tm-contact">
          <div className="container" style = {{marginTop:'10%'}}>
            <div className="row">
              <div className="col-md-12">					
                <h2 className="title">Drop <strong>me a line</strong></h2>
                <hr />					
              </div>
              <div className="col-md-1 col-sm-1"></div>
              <div className="col-md-10 col-sm-10">
                {/* <form action="#" method="post">
                  <div className="col-md-6 col-sm-6">
                    <input className="form-control" type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input className="form-control" type="email" placeholder="Your Email" />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <input className="form-control" type="text" placeholder="Your Subject" />
                    <textarea className="form-control" placeholder="Your Message" rows="6"></textarea>
                  </div>
                  <div className="col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
                    <input className="form-control" type="submit" value="SHOOT MESSAGE" />
                  </div>
                </form> */}
                <form id="contact" action="" method="post" onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <fieldset>
                          <input id = "name" name="name" type="text" className="form-control" placeholder="Your name..." required="" onChange={formik.handleChange} value={formik.values.name}/>
                          {formik.errors.name ? <div className = "error">{formik.errors.name} <br /></div> : null}
                      </fieldset>
                      </div>
                      <div className="col-md-12">
                      <fieldset>
                          <input id = "email" name="email" type="email" className="form-control" placeholder="Your email..." required="" onChange={formik.handleChange} value={formik.values.email}/>
                          {formik.errors.email ? <div className = "error">{formik.errors.email} <br /></div> : null}
                      </fieldset>
                      </div>
                      <div className="col-md-12">
                      <fieldset>
                          <input id = "subject" name="subject" type="text" className="form-control" placeholder="Subject..." required="" onChange={formik.handleChange} value={formik.values.subject} />
                          {formik.errors.subject ? <div className = "error">{formik.errors.subject} <br /></div> : null}
                      </fieldset>
                      </div>
                      <div className="col-md-12">
                      <fieldset>
                          <textarea id = "message" name="message" rows="6" className="form-control" placeholder="Your message..." required="" onChange={formik.handleChange} value={formik.values.message}></textarea>
                      </fieldset>
                      </div>
                      <div className="col-md-12">
                      <fieldset>
                          <button type="submit" id="form-submit" className="form-control">Send Now</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END CONTACT --> */}
      </>
    )
}

export default Contact
