import React , { useState } from 'react';
import "../style/contact.css"
import{ init } from '@emailjs/browser';
init("user_VMZRY92tzhFdreGcj3veP");



function ContactUs(props){


    const [text, setFname] = useState("");
    
    const [email, setEmail] = useState("");
    const [description, setComment] = useState("");
   
function Bbb(e) {
    var email = document.getElementById("email");
    
    var description = document.getElementById("comment");
    
    var text = document.getElementById("name");
    
    if (!email.checkValidity()) {
        alert("  veuillez entrer un email  ");
    }
    if (!text.checkValidity()) {
        alert(" veuillez entrer votre prenom ");
    }
   
    if (!description.checkValidity()) {
        alert("veuiller entrer un commentaire");
    }
    
    if (email.checkValidity() && text.checkValidity()  && description.checkValidity() ) {
        alert("merci , votre demande est enregistré");
        e.preventDefault();

        sendFeedback("template_ysxyycn", {
            text,
         
            description,
          email,
          
        });
      };

        
    }


const sendFeedback = (templateId, variables) => {

    window.emailjs
        .send("service_hcsupv9", templateId, variables)
          .then((res) => {
            console.log('success !');
            setFname("");
            
           
            setEmail("");
            setComment("");
            

          })
        };

    

return (
   < div>
    <section id="contact">
        <div className="section-content">
          <h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
          <h3>we love to hear from you</h3>
        </div>
        <div className="contact-section">
          <div className="container">
            <form>
              <div className="col-md-6 form-line">
                <div className="form-group">
                  <label htmlFor="exampleInputUsername">Your name</label>
                  <input type="text" className="form-control" id placeholder=" Enter Name" onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail">Email Address</label>
                  <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" onChange={(e) => setEmail(e.target.value)}/>
                </div>	
                
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="description" > Message</label>
                  <textarea className="form-control" id="description" placeholder="Enter Your Message" defaultValue={""} onChange={(e) => setComment(e.target.value)} />
                </div>
                <div>
                <button type="button" class="btn btn-warning" onClick={Bbb}>send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        </section>

      </div>
        
            
     
);
    
    }
export default ContactUs;